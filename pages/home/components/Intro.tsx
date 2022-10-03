import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { credit, group, mockup, screens1, screens2, walker } from "assets/png";
import { Image } from "components/Image";
import { animations, AnimSet } from "pages/home/components/introAnimations";
import React, { FC } from "react";
import { useParallax } from "react-scroll-parallax";
import ss from "../home.module.scss";

export const Intro: FC = ({}) => {
	const is1200 = useMediaQuery("(max-width:1200px)");
	const is750 = useMediaQuery("(max-width:750px)");
	const animSet: AnimSet = is1200 ? (is750 ? "sm" : "md") : "default";
	const anim1 = useParallax<HTMLSpanElement>({
		...animations.mockup[animSet],
	});
	const anim2 = useParallax<HTMLSpanElement>({
		...animations.credit[animSet],
	});
	const anim3 = useParallax<HTMLSpanElement>({
		...animations.screens2[animSet],
	});
	const anim4 = useParallax<HTMLSpanElement>({
		...animations.screens1[animSet],
	});
	const anim5 = useParallax<HTMLSpanElement>({
		...animations.walker[animSet],
	});
	const anim6 = useParallax<HTMLSpanElement>({
		...animations.group[animSet],
	});
	return (
		<div className={ss.intro}>
			<Image className={ss.mockup} src={mockup} alt="" ref={anim1.ref} />
			<Image className={ss.credit} src={credit} alt="" ref={anim2.ref} />
			<Image className={ss.screens2} src={screens2} alt="" ref={anim3.ref} />
			<span className={ss.screens1} ref={anim4.ref}>
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
			<Image
				className={ss.walker}
				src={walker}
				alt=""
				wrapstyle={{ maxWidth: 684 }}
				ref={anim5.ref}
			/>
			<span className={ss.group} ref={anim6.ref}>
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
							Go solo or create a walking group on the go. Anytime, anywhere!
						</Typography>
					</Box>
				</Paper>
			</span>
		</div>
	);
};
