import { Avatar, Typography } from "@mui/material";
import { memojis } from "assets/png";
import { ReactNode } from "react";

const getTag = (key: string) => (
	<Typography
		variant="subtitle1"
		component="span"
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
	<Typography
		variant="h5"
		component="span"
		width="100px"
		textAlign="center"
		key={"deco" + key}
	>
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

export const getRibbonDecoration = (
	label: string,
	ribbonLength: number,
	k: number,
) => {
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
