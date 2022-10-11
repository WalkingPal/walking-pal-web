import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db";
import admin from "firebase-admin";
import isReCaptchaValid from "pages/api/utils/reCaptcha";
import { z, ZodIssue } from "zod";

interface ResponseData {
	message: string;
	errors?: ZodIssue[];
}

const formDataSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Name must be greater the 2 characters" })
		.regex(/^[aA-zZ\s]+$/, { message: "Enter a valid Name" }),
	email: z.string().min(1).email({ message: "Please enter valid Email" }),
	phone: z.string().optional(),
	message: z.string().min(1),
});

const captchaSchema = z.string().min(1);

const registerFeedback = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
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
		return res.status(422).send({
			message: "Unproccesable request, Invalid captcha code",
		});

	try {
		await db.doc("forms/feedbacks").update({
			feedbacks: admin.firestore.FieldValue.arrayUnion({
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
export default registerFeedback;
