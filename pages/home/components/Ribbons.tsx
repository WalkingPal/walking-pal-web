import { Avatar, Box, Paper, Typography } from "@mui/material";
import { memojis } from "assets/png";
import { useWindowSize } from "hooks/useWindowResize";
import { FC, ReactNode } from "react";

const getTag = (key: string) => (
	<Typography
		variant="subtitle1"
		color="#fff"
		bgcolor="#000"
		p="10px 25px"
		borderRadius="30px"
		width="185px"
		key={"deco" + key}
	>
		Walking Buddy
	</Typography>
);
const getLabel = (key: string, label: string) => (
	<Typography variant="h5" width="100px" textAlign="center" key={"deco" + key}>
		{label}
	</Typography>
);
const getMemoji = (key: string) => {
	const index = Math.ceil(Math.random() * (memojis.length - 1));
	return (
		<Avatar
			src={memojis[index].src}
			sx={{ width: "70px", height: "70px" }}
			key={"deco" + key}
		/>
	);
};
interface IRibbon {
	label: string;
	rotateZ: number;
	color: string;
	elevation: number;
	ribbonLength: number;
	k: number;
}
const Ribbon: FC<IRibbon> = ({
	color,
	rotateZ,
	label,
	elevation,
	ribbonLength,
	k,
}) => {
	const getDecoration = () => {
		let decoWidth = 0;
		let i = 0;
		let j = 0;
		const decorations: ReactNode[] = [];
		do {
			decorations.push(getLabel(`-${k}-${j}-a`, label));
			if (i % 2 === 0) {
				decorations.push(getTag(`-${k}-${j}-b`));
				decoWidth += 285;
			} else {
				decorations.push(getMemoji(`-${k}-${j}-b`));
				decoWidth += 170;
			}
			i++;
			j++;
		} while (decoWidth <= ribbonLength);
		return decorations;
	};
	return (
		<Paper
			sx={{
				transform: `rotateZ(${rotateZ}deg) translateX(-25%)`,
				height: 80,
				width: "150%",
				bgcolor: color,
				border: "3.25255px solid #000000",
				overflow: "hidden",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
			}}
			{...{ elevation }}
		>
			{getDecoration()}
		</Paper>
	);
};

export const Ribbons: FC = () => {
	const ribbons = [
		{ label: "Eat", rotateZ: -7.66, color: "#FF8282" },
		{ label: "Chill", rotateZ: 1.21, color: "#F8CF7D" },
		{ label: "Walk", rotateZ: -12.09, color: "#8DD8D7" },
		{ label: "Repeat", rotateZ: 2.2, color: "#FFE3E3" },
	];

	const greatestTan = Math.tan((12.09 * Math.PI) / 180);
	const { width } = useWindowSize();

	const ribbonLength = width ? width * 1.5 : 0; //150% of screen width

	return (
		<Box pb={8}>
			{width && (
				<Box
					height={ribbonLength * greatestTan + 80}
					display="grid"
					alignContent="center"
					justifyContent="center"
				>
					{ribbons.map((ribbonProps, i) => {
						return (
							<Box key={"ribbon-" + i}>
								<Ribbon
									{...ribbonProps}
									elevation={i * 3 + 1}
									ribbonLength={ribbonLength}
									k={i}
								/>
							</Box>
						);
					})}
				</Box>
			)}
		</Box>
	);
};