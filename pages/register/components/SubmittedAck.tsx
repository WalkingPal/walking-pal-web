import { Button, Link, Stack, Typography } from "@mui/material";
import { Insta } from "assets/svg";
import { useWindowSize } from "hooks/useWindowResize";
import React, { FC } from "react";
import ReactConfetti from "react-confetti";

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
				borderRadius="16px"
				overflow="hidden"
			>
				<Stack sx={{ p: "32px", pt: "45px", alignItems: "center" }}>
					<Typography variant="h5" fontWeight="medium" textAlign="center">
						Congratulations!🥳
					</Typography>
					<Typography
						variant="body2"
						component="span"
						textAlign="center"
						sx={{ p: 5 }}
					>
						You have sucessfully registered as one of the early users of
						<span style={{ color: "#FF5959", fontWeight: 500 }}>
							&nbsp;WalkingPal.
						</span>
						<br />
						<br />
						Thank you for registering, you will receive the app download link in
						your mail soon. Untill then happy walking!😊
					</Typography>
				</Stack>
				<Stack
					direction="row"
					justifyContent="flex-end"
					padding="10px 16px"
					bgcolor="#F6BF51"
				>
					<Link href="https://www.instagram.com/walkingpal.in/" target="_blank" underline="none">
						<Button
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 10,
							}}
						>
							<Typography>TAKE ME TO</Typography>
							<div
								style={{
									transform: "scale(1.3)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Insta color="#fff" />
							</div>
							<Typography>INSTAGRAM</Typography>
						</Button>
					</Link>
				</Stack>
			</Stack>
		</>
	);
};
