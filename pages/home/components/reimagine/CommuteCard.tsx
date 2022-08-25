import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ICommuteCard } from "../ReImagineYourDailyCommute";

export const CommuteCard: FC<{ cc: ICommuteCard }> = ({ cc }) => {
	return (
		<Stack
			padding="14px"
			bgcolor={cc.bgcolor}
			maxWidth="256px"
			width="100%"
			borderRadius="30px"
		>
			<Stack
				sx={{
					height: "112px",
					backgroundColor: "#FFFFFF",
				}}
				justifyContent="center"
				alignItems="center"
				borderRadius="20px 20px 0 0"
			>
				<Stack direction="row" gap="4px">
					<Typography fontWeight={500}>{cc.text}</Typography>
					<Typography fontWeight={500} color={cc.textColor}>
						{cc.highlight}
					</Typography>
				</Stack>
			</Stack>
			<Stack
				height="180px"
				bgcolor={cc.bgcolor}
				justifyContent="center"
				alignItems="center"
				padding={{
					xs: "24px 0",
					md: "24px",
				}}
			>
				<Box
					component="img"
					src={cc.img}
					sx={{
						aspectRatio: 1,
						width: {
							xs: "100%",
							md: "unset",
						},
						height: {
							md: "100%",
						},
					}}
				/>
			</Stack>
		</Stack>
	);
};
