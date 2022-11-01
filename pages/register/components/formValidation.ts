import * as yup from "yup";

export type FieldName = "firstName" | "lastName" | "email" | "university";
export type Fields = Record<FieldName, string>;
export const fields: Fields = {
	firstName: "First Name",
	lastName: "Last Name",
	email: "Email",
	university: "University",
};

let schema = yup.object().shape({
	firstName: yup
		.string()
		.trim()
		.matches(/^[aA-zZ\s]+$/, "Enter a valid First Name")
		.min(3, `Names must be greater the 2 characters`),
	lastName: yup
		.string()
		.trim()
		.matches(/^[aA-zZ\s]+$/, "Enter a valid Last Name")
		.min(3, "Names must be greater the 2 characters"),
	email: yup.string().email("Please enter valid Email"),
	university: yup.string().trim().min(2),
});

export const checkValidity = async (
	fieldData: string,
	fieldName: FieldName,
) => {
	const testData = { [fieldName]: fieldData };

	let validationMsg;
	try {
		await schema.validate(testData);
		validationMsg = "";
	} catch (err) {
		validationMsg = err instanceof Error ? err.message : "Invalid input";
	}
	return validationMsg;
};
