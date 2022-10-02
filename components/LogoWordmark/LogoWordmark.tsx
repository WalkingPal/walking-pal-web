import { BoxProps } from "@mui/material";
import { Logo, Wordmark } from "assets/svg";
import React, { FC } from "react";

interface ILogoWordmark extends BoxProps {
	size: number;
	dark?: boolean;
}

export const LogoWordmark: FC<ILogoWordmark> = props => {
	const fill = props.dark ? "#767676" : "#FFFCFC";
	const scale = props.size / 160;
	const width = 311;
	const height = 73;
	return (
		<div style={{ width: width * scale, height: height * scale }}>
			<span
				style={{
					transform: `scale(${scale})`,
					transformOrigin: "top left",
					flexWrap: "nowrap",
					display: "inline-flex",
					alignItems: "flex-end",
				}}
			>
				<Logo style={{ width: 50, marginRight: 10 }} />
				<Wordmark color={fill} />
			</span>
		</div>
	);
};
