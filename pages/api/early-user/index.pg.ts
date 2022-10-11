import { NextApiRequest, NextApiResponse } from "next";
import isReCaptchaValid from "pages/api/utils/reCaptcha";
import db from "utils/db";
import admin from "firebase-admin";
import { z, ZodIssue } from "zod";

interface IRegEarlyUserResponse {
	message: string;
	errors?: ZodIssue[];
}

const formDataSchema = z.object({
	firstName: z
		.string()
		.regex(/^[aA-zZ\s]+$/, { message: "Enter a valid First Name" })
		.min(3, { message: "Names must be greater the 2 characters" }),
	lastName: z
		.string()
		.regex(/^[aA-zZ\s]+$/, { message: "Enter a valid Last Name" })
		.min(3, { message: "Names must be greater the 2 characters" }),
	email: z.string().min(1).email({ message: "Please enter valid Email" }),
	university: z.enum([
		"VSSUT",
		"VIMSAR",
		"IIM Sambalpur",
		"Sambalpur University",
		"SUIIT",
		"Other",
	]),
});

const captchaSchema = z.string().min(1);

const registerEarlyUser = async (
	req: NextApiRequest,
	res: NextApiResponse<IRegEarlyUserResponse>,
) => {
	let {
		body: { formData, captcha },
		method,
	} = req;

	if (method !== "POST")
		return res.status(404).json({
			message: "Invalid HTTP Method. Only POST method is Accepted.",
		});

	const parsedFormData = formDataSchema.safeParse(formData);
	const parsedCaptcha = captchaSchema.safeParse(captcha);

	if (!parsedFormData.success)
		return res.status(422).json({
			message: "Unproccesable Request",
			errors: parsedFormData.error.issues,
		});

	if (!parsedCaptcha.success)
		return res.status(422).json({
			message: "Unproccesable Request",
			errors: parsedCaptcha.error.issues,
		});

	if (!(await isReCaptchaValid(captcha)))
		return res.status(422).json({
			message: "Unproccesable request, Invalid captcha code",
		});

	try {
		await db.doc("forms/early-users").update({
			"early-users": admin.firestore.FieldValue.arrayUnion({
				...formData,
				created: new Date().toISOString(),
			}),
		});

		res.status(200).json({ message: "ACK👍" });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};
export default registerEarlyUser;
