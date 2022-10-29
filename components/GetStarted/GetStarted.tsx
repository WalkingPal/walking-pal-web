import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
	getstarted1,
	getstarted2,
	getstarted3,
	cylinder,
	ring,
} from "assets/png";
import { Image } from "components/Image";

export const GetStarted: FC = () => {
	return (
		<Box bgcolor="primary.main" color="#fff" borderRadius={3}>
			<Stack alignItems="center">
				<Typography variant="h3" component="h2" align="center" pt={6}>
					Ready to get started?
				</Typography>
				<Typography variant="h5" component="h3" align="center" pb={2}>
					Download the app and sign up now!
				</Typography>
				<Box position="relative" width="100%" display="grid">
					<Image
						src={ring}
						alt=""
						wrapstyle={{
							position: "absolute",
							top: -40,
							left: -90,
						}}
					/>
					<Button
						variant="contained"
						sx={{ bgcolor: "#fff", color: "#484848", mx: "auto" }}
						role="link"
						href="#"
					>
						Download
					</Button>
					<Image
						src={cylinder}
						alt=""
						wrapstyle={{
							position: "absolute",
							top: 0,
							right: { xs: -80, md: "4vw" },
						}}
					/>
				</Box>
			</Stack>
			<Box mt={20} display="flex" justifyContent="center" alignItems="flex-end">
				<Image
					src={getstarted1}
					alt=""
					wrapstyle={{ position: "relative", right: -40, display: "flex" }}
				/>
				<Image
					src={getstarted2}
					alt=""
					wrapstyle={{ zIndex: 1, display: "flex" }}
				/>
				<Image
					src={getstarted3}
					alt=""
					wrapstyle={{ position: "relative", left: -40, display: "flex" }}
				/>
			</Box>
		</Box>
	);
};
