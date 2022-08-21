import { Typography } from "@mui/material";
import { story1, story2, story3 } from "assets/png";
import { Accent2 } from "components/Accent/Accent";
import Image, { ImageProps } from "next/image";
import React, { FC } from "react";
import styles from "../about.module.scss";

interface IImg extends ImageProps {
	className?: string;
	display?: "flex" | "grid";
}

const Img: FC<IImg> = props => {
	return (
		<span
			className={props.className}
			style={{ minWidth: props.width, display: props.display }}
		>
			<Image alt="" {...props} />
		</span>
	);
};

export const OurStory: FC = ({}) => {
	return (
		<div className={styles.OurStory}>
			<Typography variant="h2">
				Our <Accent2>Story</Accent2>
			</Typography>

			<div className={styles.story1}>
				<Img className={styles.mockup} src={story1} />

				<Typography variant="h5" maxWidth="620px" textAlign="justify">
					Sometimes walking alone on a sidewalk feels very exhausting and
					lonely, but if there is a buddy by our side the journey however long
					it may be, it doesn-t bother us anymore. But finding the one to
					commute daily is like finding a needle in the haystack, We won-t be
					able to help you to find your needle but we can certainly help you
					find a walking buddy anytime you need and I am sure you have come
					across this problem atleast once in your life.{" "}
				</Typography>
			</div>

			<div className={styles.story2}>
				<Img className={styles.credit} src={story2} />

				<Typography variant="h5" maxWidth="523px" textAlign="justify">
					You will be glad to hear that you are not alone there are many people
					out there too who do feel the same. WalkingPal is the antidote to all
					those problems of our-s, it joins people like us who have a similar
					problem so that we can complete the journey easily together.{" "}
				</Typography>
			</div>

			<div className={styles.story3}>
				<Img className={styles.screens2} src={story3} />

				<Typography variant="h5" maxWidth="592px" textAlign="justify">
					By making walking more fun and enjoyable it-s a great way to complete
					the last mile which is both cheap (free actually) and eco-friendly.
					Oh, and it-s good for your health too. It-s a great way to connect and
					meet new people, make new friends, relationships To explore and talk
					about the local food, places & culture that too completing your
					journey at the same time while walking together.
				</Typography>
			</div>
		</div>
	);
};
