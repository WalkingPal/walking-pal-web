import { pic1, pic2, pic3, pic4 } from "assets/png";
import Image, { ImageProps } from "next/image";
import React, { FC } from "react";
import styles from "./gallary.module.scss";

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

export const Gallary: FC = ({}) => {
	return (
		<div className={styles.intro}>
			<Img className={styles.mockup} src={pic1} />
			<Img className={styles.credit} src={pic2} />
			<Img className={styles.screens2} src={pic3} />
			<Img className={styles.noSm} src={pic4} />
		</div>
	);
};
