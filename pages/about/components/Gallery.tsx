import { Typography } from "@mui/material";
import { about1, about2, about3, about4 } from "assets/png";
import { Image } from "components/Image";
import React, { FC } from "react";
import styles from "../about.module.scss";

export const Gallery: FC = ({}) => {
	return (
		<div className={styles.main}>
			<div className={styles.gallery}>
				<Image className={styles.about1} src={about1} alt="" />
				<Image className={styles.about2} src={about2} alt="" />
				<Image className={styles.about3} src={about3} alt="" />
				<Image className={styles.about4} src={about4} alt="" />
			</div>
			<Typography variant="h6" minWidth="300px" width="70%" textAlign="center">
				Every groundbreaking App begins with a series of small ideas that are
				combined into an all inclusive one. At WalkingPal, we wanted to change
				how consumers see the concept of Walking to commute daily, by offering a
				simple and user-friendly platform they can trust. Now having a Walking
				Buddy anytime and anywhere is easier than ever!
			</Typography>
		</div>
	);
};
