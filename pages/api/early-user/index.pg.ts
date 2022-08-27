import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db";

interface ResponseData {
	id: string;
}
const registerEarlyUser = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) => {
	try {
		const { id } = await db.collection("early-users").add({
			...req.body,
			created: new Date().toISOString(),
		});
		res.status(200).json({ id });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};
export default registerEarlyUser;
