import { Box, Paper, Typography } from "@mui/material";
import { credit, group, mockup, screens1, screens2, walker } from "assets/png";
import { Image } from "components/Image";
import React, { FC } from "react";
import ss from "../home.module.scss";

export const Intro: FC = ({}) => {
	return (
		<div className={ss.intro}>
			<Image className={ss.mockup} src={mockup} alt="" />
			<Image className={ss.credit} src={credit} alt="" />
			<Image className={ss.screens2} src={screens2} alt="" />
			<Image
				className={ss.walker}
				src={walker}
				alt=""
				wrapstyle={{ width: 684 }}
			/>
			<span className={ss.screens1}>
				<Paper
					sx={{
						background: "#F7F7F7",
						borderRadius: "50px",
						maxWidth: "327px",
						overflow: "hidden",
						display: "grid",
					}}
					className={ss.screens1}
				>
					<Typography variant="h6" p={5} textAlign="center">
						This app will change the way you commute.
					</Typography>
					<Image
						src={screens1}
						style={{ width: "100%" }}
						wrapstyle={{ display: "flex" }}
						alt=""
					/>
				</Paper>
			</span>
			<span className={ss.group}>
				<Paper
					sx={{
						background: "#F7F7F7",
						borderRadius: "50px",
						maxWidth: "327px",
						overflow: "hidden",
						alignItems: "center",
						display: "grid",
						height: "100%",
					}}
				>
					<Image src={group} style={{ width: "100%" }} alt="" />
					<Box sx={{ padding: 3, textAlign: "center" }}>
						<Typography variant="h6">Create Groups</Typography>
						<Typography variant="body1">
							Go solo or create a walking group on the go. anytime, anywhere!
						</Typography>
					</Box>
				</Paper>
			</span>
		</div>
	);
};
