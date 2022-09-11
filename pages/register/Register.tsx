import { Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { RegistrationForm } from "./components/RegistrationForm";
import { useState } from "react";
import { FormProgress } from "./components/FormProgress";
import Head from "next/head";
import { SubmittedAck } from "pages/register/components/SubmittedAck";

export const Register: NextPage = () => {
	const [stepsCompleted, setStepsCompleted] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<>
			<Head>
				<title>Early User Registeration</title>
				<meta
					name="description"
					content="Register for WalkingPal App's Early User Access"
				/>
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>
			<Stack
				width="100%"
				minHeight="100vh"
				bgcolor="primary.main"
				padding="32px"
				justifyContent="center"
				alignItems="center"
				gap="80px"
			>
				<Typography
					variant="h4"
					textAlign="center"
					color="white"
					fontWeight={500}
				>
					Early User Registration window has closed.
				</Typography>
				<Typography
					variant="subtitle1"
					textAlign="center"
					color="white"
					fontWeight={500}
				>
					Thankyou for your interest in WalkingPal!
				</Typography>
				{/* {isSubmitted ? (
					<SubmittedAck />
				) : (
					<>
						<RegistrationForm
							{...{ stepsCompleted, setStepsCompleted, setIsSubmitted }}
						/>
						<FormProgress stepsCompleted={stepsCompleted} />
					</>
				)} */}
			</Stack>
		</>
	);
};
