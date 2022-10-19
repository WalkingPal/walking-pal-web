import { Box } from "@mui/material";
import { FC } from "react";
import { Image } from "components/Image";
import { Play } from "assets/svg";
import styles from "../home.module.scss";

interface IVideoOverlay {
	thumbnail: string;
}

export const VideoOverlay: FC<IVideoOverlay> = ({ thumbnail }) => (
	<Box className={styles.videoOverlay}>
		<Image src={thumbnail} alt="" height="720px" width="1280px" />
		<Play />
	</Box>
);
