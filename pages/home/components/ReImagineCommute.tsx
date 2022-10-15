import { Box, Paper, Stack, Typography } from "@mui/material";
import { bagpack, footstep2, promotion, shopping } from "assets/png";
import { Green, Vehicle, Walk } from "assets/svg";
import { Accent } from "components/Accent";
import { FC } from "react";

const commuteCards = [
	{
		id: 0,
		text: "For ",
		highlight: "shopping",
		img: shopping.src,
		bgcolor: "#8DD8D7",
		description: "Go out shopping with WalkingPal",
	},
	{
		id: 1,
		text: "For ",
		highlight: "work",
		img: promotion.src,
		bgcolor: "#FFE3E3",
		description: "Go to work with WalkingPal",
	},
	{
		id: 2,
		text: "For ",
		highlight: "traveling",
		img: bagpack.src,
		bgcolor: "#F8CF7D",
		description: "Travel everywhere with WalkingPal",
	},
	{
		id: 3,
		text: "Or just a ",
		highlight: "walk!",
		img: footstep2.src,
		bgcolor: "#FF8282",
		description: "Go for walks anywhere with WalkingPal",
	},
];

export const ReImagineCommute: FC = () => {
	const GAP = "60px";
	return (
		<Box pt={9} px="4vw">
			<Typography variant="h3" component="h2" textAlign="center" mb={5}>
				Reimagine your daily
				<br /> <Accent>commute</Accent>
			</Typography>
			<Box gap={3} justifyContent="center" display="flex" flexWrap="wrap">
				{commuteCards.map(cc => (
					<CommuteCard key={cc.id} cc={cc} />
				))}
			</Box>

			<Box
				pt={14}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				flexWrap="wrap"
				gap={GAP}
				maxWidth={1100}
				mx="auto"
			>
				<Box
					display="grid"
					maxWidth={{ sm: 700, lg: 500 }}
					width={{ lg: `calc(50% - ${GAP}/2)` }}
					gap={GAP}
					mx="auto"
				>
					<Box minWidth={300}>
						<Typography variant="h4" component="h3">
							#LetsWalk
						</Typography>
						<Typography variant="body1">
							Walking an extra 20 minutes a day will burn 7 pounds of body fat
							per year.
						</Typography>
						<Walk width="100%" />
					</Box>
					<Box minWidth={300}>
						<Typography variant="h4" component="h3">
							#DitchVehicles
						</Typography>
						<Typography variant="body1">
							The cost of operating a card for one year is approximately ₹
							100,000. The cost of operating a bicycle for a year is only ₹
							1000. Walking is free!
						</Typography>
						<Vehicle width="100%" />
					</Box>
				</Box>

				<Box
					minWidth={300}
					maxWidth={{ sm: 700, lg: 500 }}
					width={{ lg: `calc(50% - ${GAP}/2)` }}
					mx="auto"
				>
					<Green width="100%" />
					<Box>
						<Typography variant="h4" component="h3">
							#GreenMovement
						</Typography>
						<Typography variant="body1">
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

export const CommuteCard: FC<{ cc: typeof commuteCards[0] }> = ({ cc }) => {
	return (
		<Paper
			elevation={2}
			sx={{ width: 256, borderRadius: 3, overflow: "hidden" }}
		>
			<Stack p={1} bgcolor={cc.bgcolor} width="100%">
				<Stack
					height={112}
					bgcolor="#FFF"
					justifyContent="center"
					alignItems="center"
					borderRadius="20px 20px 0 0"
					direction="row"
					gap={0.5}
				>
					<Typography fontWeight={500} variant="body1" component="h3">
						{cc.text}
						<Box fontWeight={800} component="span">
							{cc.highlight}
						</Box>
					</Typography>
				</Stack>
				<Stack
					height={180}
					bgcolor={cc.bgcolor}
					justifyContent="center"
					alignItems="center"
					p={{ xs: "20px 0", md: 2 }}
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
