import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db";

interface ResponseData {
	result: string;
}
const registerFeedback = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) => {
	res.status(400).end();

	try {
		const { id } = await db.collection("feedbacks").add({
			...req.body,
			created: new Date().toISOString(),
		});
		res.status(200).json({ result: "ACK👍" });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};
export default registerFeedback;
