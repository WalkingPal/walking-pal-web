import { FC } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { step1, step2, step3, step4 } from "assets/png";
import { Accent } from "components/Accent";
import styles from "../home.module.scss";
import Image from "next/image";

const steps = [
	{
		imgSrc: step1,
		txt: (
			<>
				Open the
				<br />
				WalkingPal
				<br />
				app
			</>
		),
		color: "#FF5959",
	},
	{
		imgSrc: step2,
		txt: (
			<>
				Set your
				<br />
				destination
				<br />
				on the map
			</>
		),
		color: "#67CBC9",
	},
	{
		imgSrc: step3,
		txt: (
			<>
				Click on the
				<br />
				magic<Accent>red</Accent>
				<br />
				button
			</>
		),
		color: "#F6BF51",
	},
	{
		imgSrc: step4,
		txt: (
			<>
				Browse & send
				<br />
				request to start
				<br />
				your journey
			</>
		),
		color: "#FF5959",
	},
];

export const EasySteps: FC = () => {
	return (
		<Box className={styles.easysteps}>
			<Box display="flex" justifyContent="center">
				<Typography variant="h4" textAlign="center" py={5} maxWidth={500}>
					Get your walking buddy in four easy steps
				</Typography>
			</Box>
			<Box className={styles.content}>
				{steps.map(({ imgSrc, txt, color }, i) => {
					const StepImg = (
						<Image width={212} height={428} src={imgSrc} alt="" />
					);
					const StepDesc = (
						<Box display="flex" alignItems="center" gap={1}>
							<Typography
								color={color}
								variant="h1"
								fontWeight="500"
								fontSize={105}
							>
								{i + 1}
							</Typography>
							<Typography
								color="#767676"
								variant="subtitle1"
								fontSize="clamp(0.7rem, 0.8rem + 1vw, 1.25rem)"
							>
								{txt}
							</Typography>
						</Box>
					);
					return (
						<Box
							className={styles.stepcard + " " + styles[`sc-${i}`]}
							key={"stepcard-" + i}
						>
							{i % 2 === 0 && StepImg}
							{StepDesc}
							{i % 2 !== 0 && StepImg}
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};
