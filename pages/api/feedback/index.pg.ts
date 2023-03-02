import { NextApiRequest, NextApiResponse } from "next";
import { db } from "utils/db";
import isReCaptchaValid from "pages/api/utils/reCaptcha";
import { z, ZodIssue } from "zod";

interface ResponseData {
	message: string;
	errors?: ZodIssue[];
}

const formDataSchema = z.object({
	name: z
		.string()
		.trim()
		.min(3, { message: "Name must be greater the 2 characters" })
		.regex(/^[aA-zZ\s]+$/, { message: "Provide a valid Name" }),
	email: z.string().email({ message: "Provide a valid Email" }),
	phone: z.string().optional(),
	message: z.string().trim().min(2),
});

const captchaSchema = z.string().trim().min(1);

type TReqBody = {
	formData: z.infer<typeof formDataSchema>;
	captcha: z.infer<typeof captchaSchema>;
};

const registerFeedback = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
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
	// Validate received Request data
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
	// Verify the received captcha code
	if (!(await isReCaptchaValid(captcha))) {
		console.error("Invalid captcha code");
		return res.status(422).send({
			message: "Unproccesable request, Invalid captcha code",
		});
	}
	console.log("exec6");
	// Save the feedback to the database
	try {
		const data = { ...parsedFormData.data, createdAt: new Date() };
		const docId = parsedFormData.data.email;
		await db.collection("forms_feedbacks").doc(docId).set(data);
		console.log("exec7");
		res.status(200).json({ message: "ACK👍" });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};
export default registerFeedback;
