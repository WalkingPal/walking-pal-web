import { Box, Paper, Typography } from "@mui/material";
import { credit, group, mockup, screens1, screens2, walker } from "assets/png";
import { Image } from "components/Image";
import React, { FC } from "react";
import ss from "../home.module.scss";

export const Intro: FC = ({}) => {
	return (
		<div className={ss.intro}>
			<Image className={ss.mockup} src={mockup} alt="" />
			<Image className={ss.credit} src={credit} width="327px" alt="" />
			<Image className={ss.screens2} src={screens2} width="327px" alt="" />
			<Image className={`${ss.walker} ${ss.noSm}`} src={walker} alt="" />
			<span className={ss.screens1}>
				<Paper
					sx={{
						background: "#F7F7F7",
						borderRadius: "50px",
						width: "327px",
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
						width: "327px",
						overflow: "hidden",
						py: 9,
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
			<span className={ss.x1}></span>
			<span className={ss.x2}></span>
		</div>
	);
};
