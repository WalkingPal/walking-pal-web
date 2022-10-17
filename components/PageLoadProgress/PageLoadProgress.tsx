import NextNProgress from "nextjs-progressbar";
import { FCC } from "types/IReact";
import { useTheme } from "@mui/material";

export const PageLoadProgress: FCC = () => {
	const { palette } = useTheme();
	return <NextNProgress color={palette.primary.main} />;
};
