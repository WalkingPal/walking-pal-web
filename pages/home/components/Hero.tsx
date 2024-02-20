import { Box, Button, Slide, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import applestore from "assets/png/applestore.png";
import play from "assets/png/play.png";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	return (
		<Slide in direction="up" timeout={700}>
			<Box display="grid" justifyContent="center" textAlign="center">
				<Typography variant="h1" mt={7}>
					Empowering <br /> Walking
				</Typography>
				<Typography
					variant="h5"
					mt={4}
					component="h2"
					style={{ color: "#B5B2B2" }}
				>
					Get your walking buddy anytime, anywhere <br /> download the App now!
				</Typography>
				<Stack
					direction="row"
					// spacing={2}
					style={{ alignItems: "center", justifyContent: "center" }}
					my={2}
				>
					<Link href="https://play.google.com/store/apps/details?id=com.walkingpal.app">
						<Image
							style={{ cursor: "pointer" }}
							width={190}
							height={75}
							objectFit="contain"
							src={play}
							alt="play-store-badge"
						/>
					</Link>
					<Link href="https://apps.apple.com/in/app/walkingpal-get-walking-buddy/id6470935291">
						<Image
							style={{ cursor: "pointer" }}
							width={190}
							height={50}
							objectFit="contain"
							src={applestore}
							alt="apple-store-badge"
						/>
					</Link>
				</Stack>
			</Box>
		</Slide>
	);
};
