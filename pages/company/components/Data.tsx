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
			<Typography
				variant="h5"
				textAlign={{ xs: "center", lg: "left" }}
				maxWidth={500}
			>
				First, look, then leap. It&apos;s our philosophy that, regardless of who
				you are or what you trade, preparing first and then committing is the
				best way to maximize life&apos;s returns. Every day, we see this spirit
				in our users.
			</Typography>
			<Box
				className={styles.cards}
				gridTemplateAreas={{ xs: '"a" "b" "c" "d"', sm: '"a b" "c d"' }}
			>
				{data.map((feat, i) => {
					return (
						<Box key={`card${i + 1}`}>
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
