import { Box } from "@mui/material";
import { Play } from "assets/svg";
import { useWindowSize } from "hooks/useWindowResize";
import type { NextPage } from "next";
import Head from "next/head";
import { EasySteps } from "pages/home/components/EasySteps";
import { EasyStepsFooter } from "pages/home/components/EasyStepsFooter";
import { Features } from "pages/home/components/Features";
import { Hero } from "pages/home/components/Hero";
import { Intro } from "pages/home/components/Intro";
import CommunityForm from "pages/home/components/JoinTheCommunityForm";
import { ReImagineYourDailyCommute } from "pages/home/components/ReImagineYourDailyCommute";
import { Ribbons } from "pages/home/components/Ribbons";
import ReactPlayer from "react-player";

export const Home: NextPage = () => {
	const { width } = useWindowSize();

	return (
		<div style={{ position: "relative" }}>
			<Head>
				<title>WalkingPal</title>
				<meta
					name="description"
					content="The world's first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<main style={{ marginBottom: 80 }}>
				<Hero />
				<Intro />
				<Features />
				<Box
					borderRadius="0 0 50px 50px"
					position="relative"
					zIndex={1}
					bgcolor="#fff"
					overflow="hidden"
				>
					<Box display="flex" justifyContent="center" mx="4vw" my={4}>
						{width && (
							<ReactPlayer
								width={width < 1200 ? width - 0.08 * width : 1200}
								height={width < 1200 ? (width - 0.08 * width) * 0.5625 : 675}
								playIcon={<Play />} // TODO : Doesnt work. ref: https://stackoverflow.com/q/69132970/12872199
								style={{ borderRadius: 30, overflow: "hidden", zIndex: 1 }}
								url="https://www.youtube.com/watch?v=L73A9fyyQqw"
							/>
						)}
					</Box>
					<Ribbons />
				</Box>
				<Box
					position="relative"
					top={-50}
					pb={5}
					px="4vw"
					pt={10}
					bgcolor="#0D0D0D"
					borderRadius="0 0 50px 50px"
				>
					<EasySteps />
					<EasyStepsFooter />
				</Box>
				<ReImagineYourDailyCommute />
				{/* <CommunityForm /> */}
			</main>
		</div>
	);
};
