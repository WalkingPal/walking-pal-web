import { Box } from "@mui/material";
import { Play } from "assets/svg";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useWindowSize } from "hooks/useWindowResize";
import type { NextPage } from "next";
import Head from "next/head";
import { Features } from "pages/home/components/Features";
import { Hero } from "pages/home/components/Hero";
import { Intro } from "pages/home/components/Intro";
import { ReImagineYourDailyCommute } from "pages/home/components/ReImagineYourDailyCommute";
import { Ribbons } from "pages/home/components/Ribbons";
import ReactPlayer from "react-player";
import styles from "./home.module.scss";

export const Home: NextPage = () => {
	const { width } = useWindowSize();

	return (
		<div style={{ position: "relative" }}>
			<Head>
				<title>WalkingPal</title>
				<meta name="description" content="WalkingPal ka desc" />
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<Header />
			<main className={styles.main}>
				<Hero />
				<Intro />
				<Features />
				<Box overflow="hidden" borderRadius="0 0 50px 50px">
					<Box display="flex" justifyContent="center" mx="vw" my={4}>
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
			</main>
			<ReImagineYourDailyCommute />
			<Footer />
		</div>
	);
};
