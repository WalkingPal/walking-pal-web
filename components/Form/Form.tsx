import {
	ChangeEvent,
	FC,
	FormEvent,
	SyntheticEvent,
	useRef,
	useState,
} from "react";
import { Box, Button, TextField } from "@mui/material";
import styles from "./form.module.scss";
import { FormHeader } from "components/Form/FormHeader";
import { checkValidity } from "components/Form/formValidation";
import _ from "lodash";
import { Popup } from "components/Popup";

export interface IFormData {
	name: string | null;
	email: string | null;
	phone: string;
	message: string | null;
}

export const Form: FC = ({}) => {
	const errorMsg = useRef("");

	const [formData, setFormData] = useState<IFormData>({
		name: null,
		email: null,
		phone: "",
		message: null,
	});

	function updateFormData(
		e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) {
		setShowError(false);
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
	}

	const [showError, setShowError] = useState(false);
	const handleErrorClose = (
		event?: SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") {
			return;
		}

		setShowError(false);
	};

	const [showSuccess, setShowSuccess] = useState(false);
	const handleSuccessClose = (
		event?: SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") {
			return;
		}

		setShowSuccess(false);
	};

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		const nullProp = _.findKey(formData, prop => prop === null);
		if (!nullProp) {
			errorMsg.current = await checkValidity(formData);
		} else {
			errorMsg.current = "Please fill all the required fields.";
		}

		if (errorMsg.current.length > 0) {
			setShowError(true);
		} else {
			setShowSuccess(true);
		}

		e.preventDefault();
	}

	return (
		<div className={styles.main}>
			<FormHeader />
			<Box
				component="form"
				mt={10}
				width="100%"
				display="grid"
				onSubmit={onSubmit}
			>
				<Box width="100%" flexWrap="wrap" display="flex" gap={3}>
					<Box
						display="grid"
						alignContent="space-between"
						width="100%"
						flex="1"
						gap={3}
						minWidth={280}
					>
						<TextField
							name="name"
							onChange={updateFormData}
							label="Name"
							type="text"
							required
						/>
						<TextField
							name="email"
							onChange={updateFormData}
							label="Email"
							type="email"
							required
						/>
						<TextField
							name="phone"
							onChange={updateFormData}
							label="Phone"
							type="tel"
						/>
					</Box>
					<TextField
						style={{ height: "100%", flex: 1, minWidth: 280 }}
						name="message"
						label="Message"
						onChange={updateFormData}
						multiline
						rows={9}
						required
					/>
				</Box>
				<Box display="flex" justifyContent="center">
					<Button type="submit" variant="contained" sx={{ mt: 2, px: 10 }}>
						Submit
					</Button>
				</Box>
			</Box>
			<Popup
				message={errorMsg.current}
				onClose={handleErrorClose}
				open={showError}
				severity="error"
			/>
			<Popup
				message="Submitted successfully!"
				onClose={handleSuccessClose}
				open={showSuccess}
				severity="success"
			/>
		</div>
	);
};
