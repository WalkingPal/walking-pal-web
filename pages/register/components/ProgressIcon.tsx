import { Box } from "@mui/material";
import { FC } from "react";

interface IProgressIcon {
	active: boolean;
	completed: boolean;
}

export const ProgressIcon: FC<IProgressIcon> = ({ active, completed }) => {
	return (
		<Box
			sx={{
				transition: "500ms",
				transform: active ? `scale(2)` : undefined,
				width: 16,
				height: 16,
				borderRadius: "50%",
				border: active ? "2px solid #FFF" : undefined,
				bgcolor: active ? "secondary.main" : completed ? "#A6C753" : "#D9D9D9",
			}}
		/>
	);
};
