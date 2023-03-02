import { Button, Stack, Typography } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { Accent } from "components/Accent";
import { useWindowSize } from "hooks/useWindowResize";
import React, { FC } from "react";
import ReactConfetti from "react-confetti";
import styles from "../register.module.scss";

export const SubmittedAck: FC = () => {
	const { width, scrollHeight } = useWindowSize();

	return (
		<>
			<ReactConfetti width={width} height={scrollHeight} />
			<Stack
				maxWidth={700}
				width="100%"
				bgcolor="white"
				boxShadow="10px 20px 50px rgba(0,0,0,0.25)"
				borderRadius={2}
				overflow="hidden"
			>
				<Stack p={3} pt={4} alignItems="center" color="text.primary">
					<Typography variant="h5" fontWeight="medium" align="center">
						Congratulations!🥳
					</Typography>
					<Typography variant="body2" align="center" p={5}>
						You have sucessfully registered as one of the early users of
						<Accent sx={{ fontWeight: 500 }}>WalkingPal.</Accent>
						<br />
						<br />
						Thank you for registering, you will receive the app download link in
						your mail soon. Untill then happy walking!😊
					</Typography>
				</Stack>
				<Stack bgcolor="secondary.main">
					<Button
						sx={{ gap: 0.3, fontSize: 24 }}
						className={styles.formButton}
						role="link"
						href="https://www.instagram.com/walkingpal.in/"
					>
						TAKE ME TO INSTAGRAM
						<Instagram fontSize="large" />
					</Button>
				</Stack>
			</Stack>
		</>
	);
};
