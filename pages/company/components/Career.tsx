import { ChevronRight } from "@mui/icons-material";
import { Typography, Box, Button, Paper } from "@mui/material";
import { FC } from "react";

const jobs = [
	{ title: "Graphic Designer", status: "Position Open", link: "#" },
	{ title: "React Native Developer", status: "Position Open", link: "#" },
	{
		title: "Backend Developer (Express.js/Node.js)",
		status: "Position Open",
		link: "#",
	},
];

export const Career: FC = () => {
	return (
		<Box maxWidth={800} mx="auto" mt={7}>
			<Typography variant="h2" align="center">
				Career Opportunities
			</Typography>
			<Typography variant="body1" mt={2} align="center">
				We are always looking for great and passionate like you to join us in
				our journey. If you want to join our team please feel free to contact us
				for the open position below.
			</Typography>
			<Box maxWidth={800} mt={4}>
				{jobs.map((job, index) => (
					<Paper
						sx={{
							p: 4,
							mt: 1,
							borderRadius: 1,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
						key={index}
					>
						<Box>
							<Typography variant="h5" component="h3">
								{job.title}
							</Typography>
							<Typography variant="body2">{job.status}</Typography>
						</Box>
						<Button
							variant="outlined"
							sx={{ p: 0, minWidth: 50, height: 50 }}
							role="link"
							href={job.link}
						>
							<ChevronRight fontSize="large" />
						</Button>
					</Paper>
				))}
			</Box>
		</Box>
	);
};
