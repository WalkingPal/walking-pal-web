import React, { FC, useState } from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box, Typography } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import styles from "./form.module.scss";
import { EL } from "assets/png";
import { Image } from "components/Image";

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
	name: string | null;
	email: string | null;
	contact: string | null;
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
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				gap="62px"
			>
				<Image
					className={styles.el}
					src={EL}
					style={{ width: "1294px", height: "655px", marginBottom: "62px" }}
				/>

				<Typography variant="h3">Let us know who you are</Typography>
			</Box>
			<Typography fontSize="18px">
				Drop down your query or message and we will get back to you as soon as
				possible.
			</Typography>

			<Box
				component="form"
				noValidate
				autoComplete="off"
				display="flex"
				gap="38px"
				marginTop="99px"
			>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					display="flex"
					flexDirection="column"
					gap="53px"
				>
					<FormControl sx={{ width: "682px" }}>
						<OutlinedInput
							style={{ height: "70px" }}
							name="name"
							onChange={updateFormData}
							placeholder="Name"
						/>
						<MyFormHelperText />
					</FormControl>
					<FormControl sx={{ width: "682px" }}>
						<OutlinedInput
							style={{ height: "70px" }}
							name="email"
							onChange={updateFormData}
							placeholder="Email"
						/>
						<MyFormHelperText />
					</FormControl>
					<FormControl sx={{ width: "682px" }}>
						<OutlinedInput
							style={{ height: "70px" }}
							name="phone"
							onChange={updateFormData}
							placeholder="Phone"
						/>
						<MyFormHelperText />
					</FormControl>
				</Box>

				<FormControl sx={{ width: "602px" }}>
					<OutlinedInput
						style={{ height: "330px" }}
						name="message"
						onChange={updateFormData}
						placeholder="Messsage"
						multiline
					/>
					<MyFormHelperText />
				</FormControl>
			</Box>
		</div>
	);
};
