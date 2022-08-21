import { pic1, pic2, pic3, pic4 } from "assets/png";
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

export const Gallery: FC = ({}) => {
	return (
		<div className={styles.main}>
			<div className={styles.gallery}>
				<Img className={styles.pic1} src={pic1} />
				<Img className={styles.pic2} src={pic2} />
				<Img className={styles.pic4} src={pic4} />
				<Img className={styles.pic3} src={pic3} />
				<span className={styles.typo}>
					Every groundbreaking App begins with a series of small ideas that are{" "}
					combined into an all inclusive one. At WalkingPal, we wanted to change
					how consumers see the concept of Walking to commute daily, by offering
					a simple and user-friendly platform they can trust. Now having a
					Walking Buddy anytime and anywhere is easier than ever!
				</span>
			</div>
		</div>
	);
};
