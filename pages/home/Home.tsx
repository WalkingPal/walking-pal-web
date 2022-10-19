import { Box } from "@mui/material";
import { useWindowSize } from "hooks/useWindowResize";
import type { NextPage } from "next";
import Head from "next/head";
import { EasySteps } from "pages/home/components/EasySteps";
import { EasyStepsFooter } from "pages/home/components/EasyStepsFooter";
import { Features } from "pages/home/components/Features";
import { Hero } from "pages/home/components/Hero";
import { Intro } from "pages/home/components/Intro";
import CommunityForm from "pages/home/components/JoinTheCommunityForm";
import { ReImagineCommute } from "pages/home/components/ReImagineCommute";
import { RibbonsSection } from "pages/home/components/RibbonsSection";
import ReactPlayer from "react-player";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import { ScrollToTop } from "components/ScrollToTop";
import { VideoOverlay } from "./components/VideoOverlay";
import { getThumbnailFromYoutubeVideo } from "utils/getThumbnailFromYoutubeVideo";
import styles from "./home.module.scss";

export const Home: NextPage = () => {
	const { width } = useWindowSize();
	const [Yplay, setYplay] = useState(false);
	const [isVideoActive, setIsVideoActive] = useState(false);
	const videoThumbnail = getThumbnailFromYoutubeVideo(
		"https://www.youtube.com/watch?v=L73A9fyyQqw",
	);

	const handlePlayClick = () => {
		setIsVideoActive(true);
		setYplay(true);
	};

	return (
		<>
			<Head>
				<title>WalkingPal</title>
				<meta
					name="description"
					content="The world's first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<div className={styles.main}>
				<Hero />
				<Intro />
				<Features />
				<Box
					sx={{ "& html5-video-player": { background: "#fff" } }}
					position="relative"
					zIndex={1}
					bgcolor="#fff"
					overflow="hidden"
				>
					<Box
						className="videoWrapper"
						display={isVideoActive ? "flex" : "none"}
						justifyContent="center"
						mx="4vw"
						my={4}
					>
						{width && (
							<ReactPlayer
								width={width < 1200 ? width - 0.08 * width : 1200}
								height={width < 1200 ? (width - 0.08 * width) * 0.5625 : 675}
								style={{ borderRadius: 30, overflow: "hidden", zIndex: 1 }}
								url="https://www.youtube.com/watch?v=L73A9fyyQqw"
								loop
								muted
								playing={Yplay}
								playsinline
								controls
							/>
						)}
					</Box>
					<Box
						className="videoOverlayWrapper"
						display={isVideoActive ? "none" : "flex"}
						justifyContent="center"
						mx="4vw"
						my={4}
						onClick={() => handlePlayClick()}
					>
						{width && <VideoOverlay thumbnail={videoThumbnail}></VideoOverlay>}
					</Box>
					<RibbonsSection />
				</Box>
				<Box
					position="relative"
					top={-50}
					pb={5}
					px="4vw"
					pt={10}
					bgcolor="#121212"
					borderRadius="0 0 50px 50px"
				>
					<EasySteps />
					<EasyStepsFooter />
				</Box>
				<ReImagineCommute />
				{/* <CommunityForm /> */}
				<ScrollToTop />
			</div>
		</>
	);
};
