import { Box, Button, Typography } from "@mui/material";
import { Accent } from "components/Accent/Accent";
import Link from "next/link";
import { FC } from "react";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	return (
		<Box display="grid" justifyContent="center" textAlign="center">
			<Typography variant="h3" mt={7}>
				We believe in a more <br /> sustainable and{" "}
				<Accent>conscientious</Accent>
				<br /> way of living.
			</Typography>
			<Typography variant="body1" mt={7}>
				We believe our team, our residents, and our partners must reflect the
				diversity of the <br /> communities we serve. We believe that trust is
				built through excellence. We’re <br />
				contributing to build a future where everyone has the support they need
				to make time for <br /> the people and things that matter most.
			</Typography>
		</Box>
	);
};
