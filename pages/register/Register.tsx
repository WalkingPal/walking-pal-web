import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import { RegistrationForm } from "./components/RegistrationForm";
import { useState } from "react";
import { FormProgress } from "./components/FormProgress";
import Head from "next/head";
import { SubmittedAck } from "pages/register/components/SubmittedAck";
import styles from "./register.module.scss";
export const Register: NextPage = () => {
	const [stepsCompleted, setStepsCompleted] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<>
			<Head>
				<title>Early User Registration</title>
				<meta
					name="description"
					content="Register for WalkingPal App's Early User Access"
				/>
				<meta name="keywords" content="early, user, register, WalkingPal" />
			</Head>
			<Box className={styles.main} bgcolor="primary.main" gap={8} color="#fff">
				<Typography variant="h3" align="center" component="h1">
					Early User Registration
				</Typography>
				{/* <Typography variant="h4" align="center" fontWeight={500}>
					Early User Registration window has closed.
				</Typography>
				<Typography variant="subtitle1" align="center" fontWeight={500}>
					Thank you for your interest in WalkingPal!
				</Typography> */}
				{isSubmitted ? (
					<SubmittedAck />
				) : (
					<>
						<RegistrationForm
							{...{ stepsCompleted, setStepsCompleted, setIsSubmitted }}
						/>
						<FormProgress stepsCompleted={stepsCompleted} />
					</>
				)}
			</Box>
		</>
	);
};
