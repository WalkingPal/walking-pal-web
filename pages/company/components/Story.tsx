import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import styles from "../company.module.scss";
import { pollution } from "assets/png";
import { Image } from "components/Image";

const story = [
	{ title: "Founded in 2014" },
	{ title: "Community of 125K+" },
	{ title: "$33M in funding" },
	{ title: "500+ global meetups" },
];
export const Story: FC = () => {
	return (
		<>
			<div className={styles.story}>
				<Box textAlign={{ xs: "center", lg: "left" }}>
					<Typography variant="subtitle1" mb={2}>
						OUR STORY
					</Typography>
					<Typography
						variant="h4"
						sx={{ sm: { textAlign: "center" }, md: { textAlign: "left" } }}
						mb={2}
					>
						We’re going to become <br /> partners for long run.
					</Typography>
				</Box>
				<Box>
					<Typography variant="body1" maxWidth={500} textAlign="center">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et odit
						quibusdam voluptates dolores pariatur porro ipsum nisi illo,
						cupiditate iste, asperiores totam exercitationem?
					</Typography>
					<br />
					<Box
						className={styles.cards}
						gridTemplateAreas={{ xs: '"a" "b" "c" "d"', sm: '"a b" "c d"' }}
					>
						{story.map((feat, i) => {
							return (
								<Box key={`card${i + 1}`} textAlign="center">
									<Typography variant="body2">{feat.title}</Typography>
								</Box>
							);
						})}
					</Box>
				</Box>
			</div>
			<Box display="flex" justifyContent="center">
				<Box
					bgcolor="#fafafa"
					borderRadius={3}
					overflow="hidden"
					textAlign="center"
					display={{ xs: "inline-grid", md: "inline-flex" }}
				>
					<Image
						wrapstyle={{
							maxWidth: 600,
							objectFit: "cover",
							"& > span": {
								height: "100% !important",
							},
						}}
						className={styles.abc}
						src={pollution}
						alt=""
					/>

					<Typography maxWidth={400} padding="20px 40px" margin="auto">
						We estimate that using WalkingPal can save our designers and
						engineers 15,800 hours per year. That is equivalent to 263,200,000
						won (220,000 USD) per year.
						<br /> <br />
						Fighting climate change one step at a time
					</Typography>
				</Box>
			</Box>
		</>
	);
};
