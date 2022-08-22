import { Typography } from "@mui/material";
import { FCC } from "types/IReact";

export const Accent1: FCC = ({ children }) => {
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

export const Accent2: FCC = ({ children }) => {
	return (
		<Typography variant="h2" component="span" sx={{ color: "primary.main" }}>
			{children}
		</Typography>
	);
};
