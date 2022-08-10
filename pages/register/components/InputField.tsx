import {
	Stack,
	Typography,
	InputLabel,
	OutlinedInput,
	useFormControl,
	FormControlState,
	Alert,
	Collapse,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface Field {
	label: string;
	value: string;
	setValue?: Dispatch<SetStateAction<string>>;
	type?: string;
}

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const InputField: FC<Field> = ({ label, value, setValue, type }) => {
	const [error, setError] = useState("");

	useEffect(() => {
		if (type === "email" && value && !emailRegex.test(value)) {
			setError("Enter a valid email address");
		} else {
			setError("");
		}
	}, [value]);

	return (
		<Stack gap="8px">
			<InputLabel
				required
				sx={{
					fontSize: 30,
				}}
			>
				<Typography variant="h5" component="span" fontWeight="medium">
					{label}
				</Typography>
			</InputLabel>
			<OutlinedInput
				type={type}
				value={value}
				onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
					console.log(e.target.value);
					{
						setValue && setValue(e.target.value);
					}
					if (type === "email" && !emailRegex.test(e.target.value)) {
						setError("Enter a valid email address");
					} else {
						setError("");
					}
				}}
			/>
			<Collapse in={error ? true : false}>
				<Alert severity="error">
					<Typography variant="textMd">{error}</Typography>
				</Alert>
			</Collapse>
		</Stack>
	);
};

export default InputField;
