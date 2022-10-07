import { Box, SxProps, Theme } from "@mui/material";
import NextImage, { ImageProps } from "next/image";
import { forwardRef } from "react";

interface IImage extends ImageProps {
	className?: string;
	wrapstyle?: SxProps<Theme>;
}

export const Image = forwardRef<HTMLSpanElement, IImage>(
	({ className, wrapstyle, ...props }, ref) => {
		return (
			<Box ref={ref} className={className} sx={wrapstyle} component="span">
				<NextImage alt="" {...props} />
			</Box>
		);
	},
);
Image.displayName = "Image";
