import { Box, Paper, Stack, Typography } from "@mui/material";
import { bagpack, footstep2, promotion, shopping } from "assets/png";
import { Accent } from "components/Accent";
import { Green, Vehicle, Walk } from "assets/svg";
import { FC } from "react";

import styles from "./reImagineCommute.module.scss";

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
		description: "Go out shopping with WalkingPal",
	},
	{
		id: 1,
		text: "For",
		highlight: "work",
		img: promotion.src,
		bgcolor: "#FFE3E3",
		description: "Go to work with WalkingPal",
	},
	{
		id: 2,
		text: "For",
		highlight: "traveling",
		img: bagpack.src,
		bgcolor: "#F8CF7D",
		description: "Travel everywhere with WalkingPal",
	},
	{
		id: 3,
		text: "Or just a",
		highlight: "walk!",
		img: footstep2.src,
		bgcolor: "#FF8282",
		description: "Go for walks anywhere with WalkingPal",
	},
];

export const ReImagineCommute: FC = () => {
	return (
		<Box pt={9} px={3}>
			<Typography variant="h3" textAlign="center" mb={5}>
				Reimagine your daily
				<br /> <Accent>commute</Accent>
			</Typography>
			<Stack justifyContent="center">
				<Box
					gap={3}
					justifyContent="center"
					display="inline-grid"
					mx="auto"
					gridTemplateColumns={{ sm: "1fr 1fr", lg: "repeat(4, 1fr)" }}
				>
					{commuteCards.map(cc => (
						<CommuteCard key={cc.id} cc={cc} />
					))}
				</Box>
			</Stack>
			<Box pt={14} className={styles.container1}>
				<Box display="flex" flexDirection="column" gap={7.5}>
					<Box>
						<Typography fontSize={31} lineHeight="42.22px" px={4.5}>
							#LetsWalk
						</Typography>
						<Typography fontSize={18} lineHeight="24.51px" pt={1} px={4.5}>
							Walking an extra 20 minutes a day will burn 7 pounds of body fat
							per year.
						</Typography>
						<Walk />
					</Box>
					<Box>
						<Typography fontSize={31} lineHeight="42.22px" px={4.5}>
							#DitchVehicles
						</Typography>
						<Typography fontSize={18} lineHeight="24.51px" pt={1} px={4.5}>
							The cost of operating a card for one year is approximately ₹
							100,000. The cost of operating a bicycle for a year is only ₹
							1000. Walking is free!
						</Typography>
						<Vehicle />
					</Box>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
					py={2.5}
				>
					<Green />
					<Box>
						<Typography fontSize={31} lineHeight="42.22px" px={7.5}>
							#GreenMovement
						</Typography>
						<Typography fontSize={18} lineHeight="24.51px" pt={1} px={7.5}>
							Avoiding just 15 KM walk of driving every week would eliminate 500
							pounds of carbon dioxide emissions a year. Which is equivalent to
							planting 10 trees.
						</Typography>
					</Box>
				</Box>
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
