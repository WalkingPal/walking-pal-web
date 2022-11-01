import { Button, Card, Input, Stack, Typography, Box } from "@mui/material";
import { community } from "assets/png";
import { FC } from "react";

const CommunityForm: FC = () => {
	return (
		<Card
			elevation={0}
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				borderRadius: 5,
				overflow: "hidden",
				py: 9,
				mx: 3,
			}}
		>
			<Box
				sx={{
					backgroundImage: `url(${community.src})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					maxWidth: 800,
					width: { xs: "100%", md: "calc(100% - 480px)" },
					borderRadius: "50px 0 0 50px",
				}}
			/>
			<Stack p={3} flexGrow={1} gap={3}>
				<Stack gap={1}>
					<Typography variant="h5">Join the community</Typography>
					<Typography variant="body1">
						Subscribe to our newsletter to stay updated with our latest
						offerings.
					</Typography>
				</Stack>
				<Input
					disableUnderline
					placeholder="Email"
					type="email"
					endAdornment={
						<Button sx={{ color: "primary.main" }}>Subscribe</Button>
					}
					sx={{ border: "none" }}
				/>
			</Stack>
		</Card>
	);
};

export default CommunityForm;
