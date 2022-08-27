import { SxProps, Theme, Typography } from "@mui/material";
import { FCC } from "types/IReact";

interface IAccent {
	sx?: SxProps<Theme>;
}
export const Accent: FCC<IAccent> = ({ children, sx }) => {
	return (
		<Typography
			component="span"
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
