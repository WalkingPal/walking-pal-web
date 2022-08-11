import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
	active: boolean;
	completed: boolean;
}

export const ProgressIcon: FC<Props> = ({ active, completed }) => {
	return (
		<Box
			sx={{
				transition: "500ms",
				transform: active ? `scale(2)` : undefined,
				width: 16,
				height: 16,
				borderRadius: "50%",
				border: "2px solid #FFFFFF",
				backgroundColor: active ? "#F6BF51" : completed ? "#A6C753" : "#D9D9D9",
			}}
		></Box>
	);
};
