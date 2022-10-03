import { Box, Paper, Stack, Typography } from "@mui/material";
import { Bagpack, Footstep2, Promotion, Shopping } from "assets/svg";
import { Accent } from "components/Accent";
import { FC } from "react";
export interface ICommuteCard {
	id: number;
	text: string;
	highlight: string;
	highlightColor: string;
	img: React.SVGProps<SVGSVGElement>;
	bgcolor: string;
	description: string;
}

const commuteCards: ICommuteCard[] = [
	{
		id: 0,
		text: "For",
		highlight: "shopping",
		highlightColor: "#67CBC9",
		img: <Shopping />,
		bgcolor: "#8DD8D7",
		description: "Go out shopping with WalkingPal",
	},
	{
		id: 1,
		text: "For",
		highlight: "work",
		highlightColor: "#FFACAC",
		img: <Promotion />,
		bgcolor: "#FFE3E3",
		description: "Go to work with WalkingPal",
	},
	{
		id: 2,
		text: "For",
		highlight: "traveling",
		highlightColor: "#F6BF51",
		img: <Bagpack />,
		bgcolor: "#F8CF7D",
		description: "Travel everywhere with WalkingPal",
	},
	{
		id: 3,
		text: "Or just a",
		highlight: "walk!",
		highlightColor: "#FF5959",
		img: <Footstep2 />,
		bgcolor: "#FF8282",
		description: "Go for walks anywhere with WalkingPal",
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
					<Typography fontWeight={800} color={cc.highlightColor}>
						{cc.highlight}
					</Typography>
				</Stack>
				<Stack
					height="180px"
					bgcolor={cc.bgcolor}
					justifyContent="center"
					alignItems="center"
					padding={{ xs: "24px 0", md: "14px" }}
				>
					{cc.img}
				</Stack>
			</Stack>
		</Paper>
	);
};
