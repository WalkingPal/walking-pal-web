import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { boy, legs, man } from "assets/gif";
import { foundersHub } from "assets/png";
import { GoogleUEBA22 } from "assets/svg";
import { Accent } from "components/Accent";
import { Image } from "components/Image";
import { FC } from "react";

export const EasyStepsFooter: FC = ({}) => {
	const isMd = useMediaQuery("(min-width:850px)");
	return (
		<>
			<Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={3}>
				<Typography variant="h2" color="#fff" mt={4}>
					It’s that
					<br />
					fast and simple
				</Typography>
				<Box mt={4}>
					<Typography variant="body1" color="#BABABA" maxWidth={480}>
						Either go with the best match, or browse and select from the
						available profiles. Send foot request and viola! start walking
						together.
					</Typography>
					<Box display="flex" py={1} gap={1}>
						<Image
							src={boy}
							height="70"
							width="70"
							style={{ borderRadius: 10 }}
							alt=""
						/>
						<Image
							src={legs}
							height="70"
							width="70"
							style={{ borderRadius: 10 }}
							alt=""
						/>
						<Image
							src={man}
							height="70"
							width="70"
							style={{ borderRadius: 10 }}
							alt=""
						/>
					</Box>
				</Box>
			</Box>
			<Paper
				elevation={2}
				sx={{
					bgcolor: "#181818",
					borderRadius: 3,
					mt: 6,
					p: 3,
				}}
			>
				<Typography
					variant="h3"
					color="#fff"
					mb={4}
					align="center"
					maxWidth={800}
					sx={{ mx: "auto" }}
				>
					We are <Accent>proud to be part</Accent> of the following programs
				</Typography>
				<Box
					display="flex"
					flexWrap="wrap"
					justifyContent="space-around"
					alignItems="center"
					gap={3}
				>
					<GoogleUEBA22
						alt="Google for Startups: University Edition 2022 Alumni"
						width="320px"
						height="100%"
						viewBox="0 0 260 82"
						style={{ width: "70%", maxWidth: 450 }}
					/>
					<Image
						width="217"
						src={foundersHub}
						alt="Microsoft for Startups: Founders Hub"
					/>
				</Box>
			</Paper>
		</>
	);
};
GoogleUEBA22;
