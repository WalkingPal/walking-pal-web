import { IFormData } from "components/FeedbackForm";
import { firstLetterCaps } from "utils/textTransform";
import * as yup from "yup";
import "yup-phone";

let schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.matches(/^[aA-zZ\s]+$/, "Enter a valid Name")
		.min(3, `Name must be greater the 2 characters`)
		.required(),
	email: yup.string().email("Please enter valid Email").required(),
	phone: yup.string().when("isPhoneBlank", {
		is: false,
		then: yup.string().phone("Please enter valid Phone Number"),
		otherwise: yup.string(),
	}),
	message: yup.string().trim().min(2).required(),
});

export const checkValidity = async (formData: IFormData) => {
	let testData;
	if (formData.phone.length > 0) {
		testData = { ...formData, isPhoneBlank: false };
	} else {
		testData = { ...formData, isPhoneBlank: true };
	}

	let validationMsg;
	try {
		await schema.validate(testData);
		validationMsg = "";
	} catch (err) {
		validationMsg = err instanceof Error ? err.message : "Invalid input";
	}

	return firstLetterCaps(validationMsg);
};
