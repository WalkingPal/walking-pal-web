import { IFormData } from "components/FeedbackForm/FeedbackForm";
import * as yup from "yup";
import "yup-phone";

let schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^[aA-zZ\s]+$/, "Enter a valid First Name")
		.min(3, `Name must be greater the 2 characters`)
		.required(),
	email: yup.string().email("Please enter valid Email").required(),
	phone: yup.string().when("isPhoneBlank", {
		is: false,
		then: yup.string().phone("Please enter valid Phone Number"),
		otherwise: yup.string(),
	}),
	message: yup.string().required(),
});

const formatValidationMsg = (msg: string) =>
	msg.charAt(0).toUpperCase() + msg.slice(1);

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

	return formatValidationMsg(validationMsg);
};
