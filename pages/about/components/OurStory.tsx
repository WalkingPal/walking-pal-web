import { Box, Typography } from "@mui/material";
import { clip, footstep, pin, story1, story2, story3 } from "assets/png";
import { Accent } from "components/Accent";
import { Image } from "components/Image";
import { StaticImageData } from "next/image";
import React, { FC } from "react";
import styles from "../about.module.scss";

interface IStory {
	imgSrc: StaticImageData;
	icon: StaticImageData;
	content: string;
	rowReverse?: boolean;
}
const Story: FC<IStory> = ({ imgSrc, content, rowReverse, icon }) => {
	return (
		<Box
			flexDirection={rowReverse ? "row-reverse" : "row"}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexWrap="wrap"
			gap={3}
		>
			<Box
				position="relative"
				display="flex"
				justifyContent="center"
				maxWidth="400"
				sx={{ width: { xs: "80%", md: "30%" } }}
			>
				<Image
					wrapstyle={{ display: "flex", justifyContent: "center" }}
					src={imgSrc}
					alt=""
				/>
				<Image
					wrapstyle={{
						position: "absolute",
						bottom: "-50px",
						width: "100px",
						left: rowReverse ? undefined : 0,
						right: rowReverse ? 0 : undefined,
					}}
					src={icon}
					alt=""
				/>
			</Box>

			<Typography
				variant="body1"
				sx={{ width: { xs: "80%", md: "60%" }, maxWidth: 500 }}
				textAlign="justify"
			>
				{content}
			</Typography>
		</Box>
	);
};

export const OurStory: FC = () => {
	return (
		<div className={styles.ourstory}>
			<Typography variant="h2">
				Our <Accent>Story</Accent>
			</Typography>

			<Story
				rowReverse
				imgSrc={story1}
				content="Sometimes walking alone on a sidewalk feels very exhausting and lonely, but if there is a buddy by our side the journey however long it may be, it doesn't bother us anymore. But finding the one to commute daily is like finding a needle in the haystack. We won't be able to help you to find your needle but we can certainly help you find a walking buddy anytime you need and I am sure you have come across this problem at least once in your life."
				icon={pin}
			/>
			<Story
				imgSrc={story2}
				content="You will be glad to hear that you are not alone there are many people out there too who do feel the same. WalkingPal is the antidote to all those problems of ours, it joins people like us who have a similar problem so that we can complete the journey easily together."
				icon={footstep}
			/>

			<Story
				rowReverse
				imgSrc={story3}
				content="By making walking more fun and enjoyable it's a great way to complete the last mile which is both cheap (free actually) and eco-friendly. Oh, and it's good for your health too. It's a great way to connect and meet new people, make new friends, and build relationships. Explore and talk about local food, places, and culture while completing your journey walking together."
				icon={clip}
			/>
		</div>
	);
};
