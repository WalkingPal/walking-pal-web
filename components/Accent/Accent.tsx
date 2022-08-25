import { Typography } from "@mui/material";
import { FCC } from "types/IReact";

export const Accent: FCC = ({ children }) => {
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
			}}
		>
			&nbsp;{children}&nbsp;
		</Typography>
	);
};
