import NextNProgress from "nextjs-progressbar";
import { FCC } from "types/IReact";

export const PageLoadProgress: FCC = () => {
	const progressBarColor = "#FF5959";
	return <NextNProgress color={progressBarColor} />;
};
