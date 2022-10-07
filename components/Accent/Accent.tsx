import { SxProps, Theme, Typography, TypographyProps } from "@mui/material";
import { FCC } from "types/IReact";

interface IAccent extends TypographyProps {
	sx?: SxProps<Theme>;
}
export const Accent: FCC<IAccent> = ({ children, sx, ...props }) => {
	return (
		<Typography
			component="span"
			{...props}
			sx={{
				color: "primary.main",
				fontSize: "inherit",
				fontWeight: "inherit",
				lineHeight: "inherit",
				letterSpacing: "inherit",
				fontFamily: "inherit",
				...sx,
			}}
		>
			&nbsp;{children}&nbsp;
		</Typography>
	);
};
