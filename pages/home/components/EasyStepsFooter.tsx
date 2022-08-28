import { Box, Typography, useMediaQuery } from "@mui/material";
import { foundersHub } from "assets/png";
import { Accent } from "components/Accent";
import { Image } from "components/Image";
import { FC } from "react";

export const EasyStepsFooter: FC = ({}) => {
	const isMd = useMediaQuery("(min-width:850px)");
	return (
		<Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={3}>
			<Box>
				<Typography variant="h2" color="#fff" mt={4}>
					It’s that
					<br />
					fast and simple
				</Typography>
				<Typography variant="body1" color="#BABABA" maxWidth={480}>
					Either go with the best match, or browse and select from the available
					profiles. Send foot request and viola! start walking together.
				</Typography>
			</Box>

			<Box
				p={1}
				bgcolor="#181818"
				borderRadius={3}
				display={(isMd && "grid") || { xs: "flex" }}
				mt={3}
			>
				<Box
					bgcolor="#000"
					borderRadius={2}
					height={(isMd && 173) || { xs: "100%" }}
					alignItems="center"
					justifyContent="center"
					display="inherit"
				>
					<Typography textAlign="center" m={1}>
						A proud<Accent>partner</Accent>
					</Typography>
				</Box>
				<Image
					wrapstyle={{ p: 2, py: isMd ? 2 : 4, display: "block" }}
					width="217"
					height="149"
					src={foundersHub}
					alt=""
				/>
			</Box>
		</Box>
	);
};
