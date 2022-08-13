import { Button, Stack, Typography } from "@mui/material";
import { useWindowSize } from "hooks/useWindowResize";
import Link from "next/link";
import React, { FC } from "react";
import ReactConfetti from "react-confetti";

export const SubmittedAck: FC = ({}) => {
	const { width, height } = useWindowSize();

	return (
		<>
			<ReactConfetti width={width} height={height} />
			<Stack
				maxWidth={700}
				width="100%"
				bgcolor="white"
				boxShadow="10px 20px 50px rgba(0,0,0,0.25)"
				borderRadius="16px"
				overflow="hidden"
			>
				<Stack sx={{ p: "32px", alignItems: "center" }}>
					<Typography variant="h5" fontWeight="medium">
						Congratulations!🥳
					</Typography>
					<Typography
						variant="body2"
						component="span"
						textAlign="center"
						sx={{ p: 5 }}
					>
						You have sucessfully registered as one of the early users of
						<span style={{ color: "#FF5959" }}> WalkingPal.</span> <br />
						Thank you for registering, you will receive the app download link in
						your mail soon. Untill then happy walking!☺️
					</Typography>
				</Stack>
				<Stack
					direction="row"
					justifyContent="flex-end"
					padding="10px 16px"
					bgcolor="#F6BF51"
				>
					<Link href="/">
						<Button>
							<Typography>HOME</Typography>
						</Button>
					</Link>
				</Stack>
			</Stack>
		</>
	);
};
