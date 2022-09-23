import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db";
import admin from "firebase-admin";
import isReCaptchaValid from "pages/api/utils/reCaptcha";

interface ResponseData {
	message: string;
}
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

	// do zod and neccesary validations here & email check via api too
	// if captcha is misssing OR isAnyFieldEmpty check
	if (!Object.values(formData).every(x => !!x))
		return res.status(422).json({
			message: "Unproccesable request, Missing Fields",
		});

	if (!(await isReCaptchaValid(captcha)))
		return res.status(422).json({
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
