import { Box, Paper } from "@mui/material";
import { useWindowSize } from "hooks/useWindowResize";
import { getRibbonDecoration } from "pages/home/components/RibbonDecoration";
import { FC, ReactNode } from "react";

const RIBBON_HEIGHT = 80;
const ribbons = [
	{ label: "Eat", color: "#FF8282" },
	{ label: "Chill", color: "#F8CF7D" },
	{ label: "Walk", color: "#8DD8D7" },
	{ label: "Repeat", color: "#FFE3E3" },
];
export const RibbonsSection: FC = () => {
	const { width } = useWindowSize();
	if (!width) return null;

	const elevAngle = Math.asin((2 * RIBBON_HEIGHT) / width);
	const ribbonBoxHeight = RIBBON_HEIGHT / Math.cos(elevAngle);
	const sectionHeight = ribbonBoxHeight * (ribbons.length + 2);
	return (
		<Box
			height={sectionHeight}
			display="grid"
			alignContent="center"
			justifyContent="center"
		>
			{ribbons.map(({ label, color }, i) => {
				const rotateZ = i % 2 ? elevAngle : elevAngle * -1;
				return (
					<Box
						zIndex={ribbons.length - i}
						height={ribbonBoxHeight}
						key={"ribbon-" + i}
						sx={{ transform: `rotateZ(${rotateZ}rad)` }}
					>
						<Ribbon
							{...{ rotateZ: elevAngle, color }}
							elevation={(ribbons.length - i) * 3}
							decorations={getRibbonDecoration(label, width * 1, i)}
						/>
					</Box>
				);
			})}
		</Box>
	);
};

interface IRibbon {
	color: string;
	elevation: number;
	decorations: ReactNode[];
}

const Ribbon: FC<IRibbon> = ({ color, elevation, decorations }) => {
	return (
		<Paper
			sx={{
				height: RIBBON_HEIGHT,
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
			{decorations}
		</Paper>
	);
};
