import React, { FC, useState } from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import styles from "./form.module.scss";

function MyFormHelperText() {
	const { focused } = useFormControl() || {};

	const helperText = React.useMemo(() => {
		if (focused) {
			return "This field is being focused";
		}

		return "";
	}, [focused]);

	return <FormHelperText>{helperText}</FormHelperText>;
}

interface IFormData {
	name: string;
	email: string;
	contact: string;
}

export const Form: FC = ({}) => {
	const [formData, setFormData] = useState<IFormData>({
		name: null,
		email: null,
		contact: null,
	});

	function updateFormData(
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
	}

	return (
		<div className={styles.main}>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "40px",
				}}
			>
				<FormControl sx={{ width: "30ch" }}>
					<OutlinedInput
						name="name"
						onChange={updateFormData}
						placeholder="Name"
					/>
					<MyFormHelperText />
				</FormControl>
				<FormControl sx={{ width: "30ch" }}>
					<OutlinedInput
						name="email"
						onChange={updateFormData}
						placeholder="Email"
					/>
					<MyFormHelperText />
				</FormControl>
				<FormControl sx={{ width: "30ch" }}>
					<OutlinedInput
						name="phone"
						onChange={updateFormData}
						placeholder="Phone"
					/>
					<MyFormHelperText />
				</FormControl>
			</Box>
		</div>
	);
};
