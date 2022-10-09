import { createRef, Dispatch, FC, SetStateAction } from "react";
import { Stack, Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import ReCAPTCHA from "react-google-recaptcha";

interface IFormActions {
	totalSteps: number;
	stepsCompleted: number;
	goToPrevious: () => void;
	goToNext: () => void;
	handleSubmit: (captchaToken: string) => void;
	isError: () => boolean;
	setShowErr: Dispatch<SetStateAction<boolean>>;
	loading: boolean;
}

export const FormActions: FC<IFormActions> = ({
	goToNext,
	goToPrevious,
	stepsCompleted,
	totalSteps,
	handleSubmit,
	isError,
	setShowErr,
	loading,
}) => {
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

	function proceedSubmit() {
		// Execute the reCAPTCHA when the form is submitted
		recaptchaRef.current && recaptchaRef.current.execute();
	}
	return (
		<>
			<Stack
				direction="row"
				justifyContent="space-between"
				padding="10px 16px"
				bgcolor="#F6BF51"
			>
				<Button disabled={stepsCompleted === 0} onClick={goToPrevious}>
					<Typography textTransform="uppercase">previous</Typography>
				</Button>
				{stepsCompleted === totalSteps ? (
					<LoadingButton
						loading={loading}
						loadingPosition="end"
						endIcon={
							<Send sx={{ display: loading ? "none" : "inline-block" }} />
						}
						variant="text"
						onClick={() => (isError() ? setShowErr(true) : proceedSubmit())}
					>
						SUBMIT
					</LoadingButton>
				) : (
					<Button onClick={() => (isError() ? setShowErr(true) : goToNext())}>
						<Typography>NEXT</Typography>
					</Button>
				)}
			</Stack>
			{/* <ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
				onChange={onReCAPTCHAChange}
			/> */}
		</>
	);
};
