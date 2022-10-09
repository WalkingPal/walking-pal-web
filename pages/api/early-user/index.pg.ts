import { NextApiRequest, NextApiResponse } from "next";
import isReCaptchaValid from "pages/api/utils/reCaptcha";
import db from "utils/db";
import admin from "firebase-admin";

interface IRegEarlyUserResponse {
	message: string;
}
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

	// do zod and neccesary validations here & email check via any free to use available apis too

	// if captcha is missing OR isAnyFieldEmpty check
	if (!Object.values(formData).every(x => !!x))
		return res.status(422).json({
			message: "Unproccesable request, Missing Fields",
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
