import { Box, Paper, Stack, Typography } from "@mui/material";
import { Accent } from "components/Accent";
import { FC } from "react";
export interface ICommuteCard {
	id: number;
	text: string;
	highlight: string;
	img: string;
	bgcolor: string;
	textColor: string;
}

const commuteCards: ICommuteCard[] = [
	{
		id: 0,
		text: "For",
		highlight: "shopping",
		img: "/images/wp_shopping.png",
		bgcolor: "#8DD8D7",
		textColor: "#67CBC9",
	},
	{
		id: 1,
		text: "For",
		highlight: "work",
		img: "/images/wp_promotion.png",
		bgcolor: "#FFE3E3",
		textColor: "#FFACAC",
	},
	{
		id: 2,
		text: "For",
		highlight: "traveling",
		img: "/images/wp_bagpack.png",
		bgcolor: "#F8CF7D",
		textColor: "#F6BF51",
	},
	{
		id: 3,
		text: "Or just a",
		highlight: "walk!",
		img: "/images/wp_footsteps.png",
		bgcolor: "#FF8282",
		textColor: "#FF5959",
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
					<Typography fontWeight={500} color={cc.textColor}>
						{cc.highlight}
					</Typography>
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
					/>
				</Stack>
			</Stack>
		</Paper>
	);
};
