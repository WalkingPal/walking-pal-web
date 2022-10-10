import { Box, Typography } from "@mui/material";
import { Accent } from "components/Accent";
import { FC } from "react";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	return (
		<Box display="grid" justifyContent="center" textAlign="center">
			<Typography variant="h3" component="h2" pt={7} mx={1} maxWidth="800px">
				We believe in a more sustainable and
				<Accent>conscientious</Accent>
				way of living.
			</Typography>
			<Typography
				variant="body1"
				component="span"
				mt={7}
				mx={3}
				maxWidth="800px"
			>
				We believe our team, our residents, and our partners must reflect the
				diversity of the communities we serve. We believe that trust is built
				through excellence. We’re contributing to build a future where everyone
				has the support they need to make time for the people and things that
				matter most.
			</Typography>
		</Box>
	);
};
