import { Typography } from "@mui/material";
import { FCC } from "types/IReact";

export const Accent: FCC = ({ children }) => {
	return (
		<Typography variant="h3" component="span" sx={{ color: "primary.main" }}>
			{children}
		</Typography>
	);
};
