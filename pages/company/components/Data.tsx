import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import styles from "../company.module.scss";

const data = [
	{ title: "2021", desc: "Year founded" },
	{
		title: "50%",
		desc: "Remote Employees",
	},
	{
		title: "5M+",
		desc: "Developers",
	},
	{ title: "4,000", desc: "Paying customers" },
];
export const Data: FC = () => {
	return (
		<div className={styles.data}>
			<Typography variant="h5" textAlign="left" maxWidth={500}>
				First, look, then leap. It&apos;s our philosophy that, regardless of who
				you are or what you trade, preparing first and then committing is the
				best way to maximize life&apos;s returns. Every day, we see this spirit
				in our users.
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
				{data.map((feat, i) => {
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
							<Typography variant="h4" textAlign="center">
								{feat.title}
							</Typography>
							<Typography variant="body2" textAlign="center">
								{feat.desc}
							</Typography>
						</Box>
					);
				})}
			</Box>
		</div>
	);
};
