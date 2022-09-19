/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import styles from "../company.module.scss";
import { story4 } from "assets/png";
import Image from "next/image";

const story = [
	{ title: "	✓ Founded in 2014" },
	{ title: "	✓ Community of 125K+" },
	{ title: "	✓ $33M in funding" },
	{ title: "	✓ 500+ global meetups" },
];
export const Story: FC = () => {
	return (
		<div className={styles.story}>
			<Typography
				variant="h4"
				sx={theme => ({
					[theme.breakpoints.down("sm")]: {
						textAlign: "center",
					},
				})}
			>
				<Typography variant="h5" mb={3}>
					OUR STORY
				</Typography>
				We’re going to become <br /> partners for long run.
			</Typography>
			<Box>
				<Typography maxWidth={559} textAlign="center">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et odit
					quibusdam voluptates dolores pariatur porro ipsum nisi illo,
					cupiditate iste, asperiores totam exercitationem?{" "}
				</Typography>{" "}
				<br />
				<Box
					className={styles.cards}
					sx={theme => ({
						[theme.breakpoints.down("sm")]: {
							gridTemplateAreas: '"a" "b" "c" "d" !important',
							width: "100%",
						},
					})}
				>
					{story.map((feat, i) => {
						const textAlign = i % 2 === 0 ? "left" : "right";
						return (
							<Box
								className={styles[`card${i + 1}`]}
								key={`card${i + 1}`}
								sx={theme => ({
									[theme.breakpoints.down("sm")]: {
										textAlign,
										width: "100% !important",
										px: "7vw",
									},
								})}
							>
								<Typography variant="subtitle1">{feat.title}</Typography>
							</Box>
						);
					})}
				</Box>
			</Box>
			<Box mt={5} display="flex">
				<div>
					<Image src={story4} alt="" />
				</div>
				<div className={styles.typo}>
					<Typography maxWidth={341}>
						"We estimate that using WalkingPal can save our designers and
						engineers 15,800 hours per year." That is equivalent to 263,200,000
						won (220,000 USD) per year."
						<br /> <br />
						Fighting climate change one step at a time
					</Typography>
				</div>
			</Box>
		</div>
	);
};
