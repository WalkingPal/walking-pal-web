import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	return (
		<Box display="grid" justifyContent="center" textAlign="center">
			<Typography variant="h1" mt={7}>
				Empowering <br /> Walking
			</Typography>
			<Typography variant="h5" mt={7}>
				Get your walking buddy anytime, anywhere!
			</Typography>
			<Box my={4}>
				<Button variant="contained">
					<Link href="/register">Register</Link>
				</Button>
			</Box>
		</Box>
	);
};
