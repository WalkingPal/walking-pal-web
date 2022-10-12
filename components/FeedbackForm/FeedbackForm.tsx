import {
	ChangeEvent,
	createRef,
	FC,
	FormEvent,
	SyntheticEvent,
	useRef,
	useState,
} from "react";
import { Box, TextField } from "@mui/material";
import styles from "./form.module.scss";
import { FormHeader } from "components/FeedbackForm/components/FormHeader";
import { checkValidity } from "components/FeedbackForm/components/formValidation";
import _ from "lodash";
import { Popup } from "components/Popup";
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export interface IFormData {
	name: string | null;
	email: string | null;
	phone: string;
	message: string | null;
}

export const FeedbackForm: FC = ({}) => {
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

	const [loading, setLoading] = useState(false);
	async function handleSubmit(captchaToken: string | null) {
		const nullProp = _.findKey(formData, prop => prop === null);
		if (!nullProp) {
			errorMsg.current = await checkValidity(formData);
		} else {
			errorMsg.current = "Please fill all the required fields.";
		}

		if (errorMsg.current.length > 0) {
			setShowError(true);
		} else {
			setLoading(true);
			try {
				await axios.post("/api/feedback", { formData, captcha: captchaToken });
				setShowSuccess(true);
			} catch (e) {
				errorMsg.current = "Some error occurred! Please try again later.";
				setShowError(true);
				console.error(e);
			}
			setLoading(false);
		}
	}

	function proceedSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		// Execute the reCAPTCHA when the form is submitted
		recaptchaRef.current && recaptchaRef.current.execute();
	}

	const recaptchaRef = createRef<ReCAPTCHA>();
	// createRef - https://www.geeksforgeeks.org/difference-between-useref-and-createref-in-reactjs/

	function onReCAPTCHAChange(captchaToken: string | null) {
		// If captchaCode=null =>> reCAPTCHA expired =>> return early
		if (!captchaToken) return;
		// Else reCAPTCHA was executed successfully
		handleSubmit(captchaToken);
		// Reset the reCAPTCHA so that it can be executed again
		recaptchaRef.current && recaptchaRef.current.reset();
	}

	return (
		<div className={styles.main}>
			<FormHeader />
			<Box
				component="form"
				mt={10}
				width="100%"
				display="grid"
				onSubmit={proceedSubmit}
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
						sx={{ height: "100%", flex: 1, minWidth: 280 }}
						name="message"
						label="Message"
						onChange={updateFormData}
						multiline
						rows={9}
						required
					/>
				</Box>
				<Box display="flex" justifyContent="center">
					<LoadingButton
						loading={loading}
						loadingPosition="end"
						endIcon={<Send />}
						type="submit"
						variant="contained"
						sx={{ mt: 2, px: 5 }}
					>
						Submit
					</LoadingButton>
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
			<ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
				onChange={onReCAPTCHAChange}
			/>
		</div>
	);
};
