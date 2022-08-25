import { Box, SxProps, Theme } from "@mui/material";
import NextImage, { ImageProps } from "next/image";
import { FC } from "react";

interface IImage extends ImageProps {
	className?: string;
	wrapStyle?: SxProps<Theme>;
}

export const Image: FC<IImage> = props => {
	return (
		<Box className={props.className} sx={props.wrapStyle} component="span">
			<NextImage alt="" {...props} />
		</Box>
	);
};
