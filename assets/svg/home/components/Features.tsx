import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import styles from "../home.module.scss";

const features = [
	{ title: "Last-Mile", desc: "Cover your last mile with your walking buddy." },
	{
		title: "New friendships",
		desc: "Meet new people and nurture new friendships.",
	},
	{
		title: "Local connection",
		desc: "A chance to have a local connection in an new city.",
	},
	{ title: "Fun and chill.", desc: "Walk, have fun, and chill together." },
];
export const Features: FC = () => {
	return (
		<div className={styles.features}>
			<Typography
				variant="h4"
				sx={theme => ({
					[theme.breakpoints.down("sm")]: {
						textAlign: "center",
					},
				})}
			>
				The first and only <br /> walking buddy service.
			</Typography>
			<Box
				className={styles.cards}
				sx={theme => ({
					[theme.breakpoints.down("sm")]: {
						gridTemplateAreas: '"a" "b" "c" "d" !important',
						width: "100%",
					},
				})}
			>
				{features.map((feat, i) => {
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
							<Typography variant="body2">{feat.desc}</Typography>
						</Box>
					);
				})}
			</Box>
		</div>
	);
};
