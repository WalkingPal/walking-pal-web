import { Box, Paper, Stack, Typography } from "@mui/material";
import { bagpack, footstep2, promotion, shopping } from "assets/png";
import { Accent } from "components/Accent";
import { FC } from "react";
export interface ICommuteCard {
	id: number;
	text: string;
	highlight: string;
	img: string;
	bgcolor: string;
	description: string;
}

const commuteCards: ICommuteCard[] = [
	{
		id: 0,
		text: "For",
		highlight: "shopping",
		img: shopping.src,
		bgcolor: "#8DD8D7",
		description:
			"illustration of multiple shopping bags in different sizes, shapes and colors.",
	},
	{
		id: 1,
		text: "For",
		highlight: "work",
		img: promotion.src,
		bgcolor: "#FFE3E3",
		description:
			"illustration of a man in formal attire climbing stairs that turns into arrow pointing up",
	},
	{
		id: 2,
		text: "For",
		highlight: "traveling",
		img: bagpack.src,
		bgcolor: "#F8CF7D",
		description: "illustration of a big green backpack",
	},
	{
		id: 3,
		text: "Or just a",
		highlight: "walk!",
		img: footstep2.src,
		bgcolor: "#FF8282",
		description: "illustration of two shoe prints",
	},
];

export const ReImagineYourDailyCommute: FC = () => {
	return (
		<Box pt={9} px={3}>
			<Typography variant="h3" textAlign="center" mb={5}>
				Reimagine your daily
				<br /> <Accent>commute</Accent>
			</Typography>
			<Box gap={3} justifyContent="center" display="flex" flexWrap="wrap">
				{commuteCards.map(cc => (
					<CommuteCard key={cc.id} cc={cc} />
				))}
			</Box>
		</Box>
	);
};

export const CommuteCard: FC<{ cc: ICommuteCard }> = ({ cc }) => {
	return (
		<Paper
			elevation={2}
			sx={{ width: 256, borderRadius: 3, overflow: "hidden" }}
		>
			<Stack padding="14px" bgcolor={cc.bgcolor} width="100%">
				<Stack
					sx={{ height: "112px", backgroundColor: "#FFFFFF" }}
					justifyContent="center"
					alignItems="center"
					borderRadius="20px 20px 0 0"
					direction="row"
					gap="4px"
				>
					<Typography fontWeight={500}>{cc.text}</Typography>
					<Typography fontWeight={800}>{cc.highlight}</Typography>
				</Stack>
				<Stack
					height="180px"
					bgcolor={cc.bgcolor}
					justifyContent="center"
					alignItems="center"
					padding={{ xs: "24px 0", md: "24px" }}
				>
					<Box
						component="img"
						src={cc.img}
						sx={{
							aspectRatio: 1,
							width: { xs: "100%", md: "unset" },
							height: { md: "100%" },
						}}
						alt={cc.description}
					/>
				</Stack>
			</Stack>
		</Paper>
	);
};
