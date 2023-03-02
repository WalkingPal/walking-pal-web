import { NextApiRequest, NextApiResponse } from "next";
import isReCaptchaValid from "pages/api/utils/reCaptcha";
import { db } from "utils/db";
import { z, ZodIssue } from "zod";
import { validate } from "deep-email-validator";

interface IRegEarlyUserResponse {
	message: string;
	errors?: ZodIssue[];
}

const formDataSchema = z.object({
	firstName: z
		.string()
		.trim()
		.regex(/^[aA-zZ\s]+$/, { message: "Please provide a valid First Name" })
		.min(3, { message: "Names must be greater the 2 characters" }),
	lastName: z
		.string()
		.trim()
		.regex(/^[aA-zZ\s]+$/, { message: "Please provide a valid Last Name" })
		.min(3, { message: "Names must be greater the 2 characters" }),
	email: z.string().email({ message: "Please provide a valid Email" }),
	university: z.string().trim().min(2),
});

const captchaSchema = z.string().trim().min(2);

type TReqBody = {
	formData: z.infer<typeof formDataSchema>;
	captcha: z.infer<typeof captchaSchema>;
};
const registerEarlyUser = async (
	req: NextApiRequest,
	res: NextApiResponse<IRegEarlyUserResponse>,
) => {
	const { formData, captcha } = req.body as TReqBody;
	const { method } = req;
	console.log("exec1");
	if (method !== "POST") {
		console.error("Invalid HTTP Method. Only POST method is Accepted.");
		return res.status(404).json({
			message: "Invalid HTTP Method. Only POST method is Accepted.",
		});
	}
	console.log("exec2");
	const parsedFormData = formDataSchema.safeParse(formData);
	const parsedCaptcha = captchaSchema.safeParse(captcha);
	console.log("exec3");
	if (!parsedCaptcha.success) {
		console.error("!parsedCaptcha.success", parsedCaptcha.error.issues);
		return res.status(422).json({
			message: "Unproccesable Request. Provide reCAPTCHA code",
			errors: parsedCaptcha.error.issues,
		});
	}
	console.log("exec4");
	if (!parsedFormData.success) {
		console.error("!parsedFormData.success", parsedFormData.error.issues);
		return res.status(422).json({
			message: "Unproccesable Request",
			errors: parsedFormData.error.issues,
		});
	}
	console.log("exec5");
	if (!(await isReCaptchaValid(captcha))) {
		console.error("Unproccesable request, Invalid captcha code");
		return res.status(422).json({
			message: "Unproccesable request, Invalid captcha code",
		});
	}
	console.log("exec6");
	try {
		// let { valid, reason } = await validate(parsedFormData.data.email);
		console.log("exec7");
		// if (valid) {
		const data = { ...parsedFormData.data, created: new Date() };
		const docId = parsedFormData.data.email;
		// await db.doc("forms/early-users").update({
		// 	"early-users": admin.firestore.FieldValue.arrayUnion({
		// 		...formData,
		// 		created: new Date().toISOString(),
		// 	}),
		// });
		console.log("exec8");
		await db.collection("forms_early-users").doc(docId).set(data);

		return res.status(200).json({ message: "ACK👍" });
		// } else {
		// 	console.error("Email Invalid, reason: ", reason);
		// 	return res.status(422).json({
		// 		message: "Email Invalid, reason: ".concat(reason ?? ""),
		// 	});
		// }
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};
export default registerEarlyUser;
