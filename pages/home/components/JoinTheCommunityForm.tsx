import { Button, Card, Input, Stack, Typography, Box } from "@mui/material";
import { FC } from "react";

const CommunityForm: FC = () => {
	return (
		<Card
			elevation={0}
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				borderRadius: "50px",
				overflow: "hidden",
				py: 9,
				mx: 3,
			}}
		>
			<Box
				sx={{
					backgroundImage: "url(/images/wp_community.png)",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					maxWidth: "800px",
					width: { xs: "100%", md: "calc(100% - 480px)" },
					borderRadius: "50px 0 0 50px",
				}}
			/>
			<Stack padding="32px" flexGrow={1} gap="32px">
				<Stack gap="12px">
					<Typography variant="h5">Join the community</Typography>
					<Typography variant="body1">
						Subscribe to our news letter to stay updated with our latest
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
