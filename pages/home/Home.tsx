import { Box } from "@mui/material";
import { Play } from "assets/svg";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useWindowSize } from "hooks/useWindowResize";
import type { NextPage } from "next";
import Head from "next/head";
import { Features } from "pages/home/components/Features";
import { Intro } from "pages/home/components/Intro";
import ReactPlayer from "react-player";
import styles from "./home.module.scss";

export const Home: NextPage = () => {
	const { width } = useWindowSize();

	return (
		<>
			<Head>
				<title>WalkingPal</title>
				<meta name="description" content="WalkingPal ka desc" />
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<Header />
			<main className={styles.main}>
				<Intro />
				<Features />
				<Box display="flex" justifyContent="center" mx="4vw" my={3}>
					{width && (
						<ReactPlayer
							width={width < 1200 ? width - 0.08 * width : 1200}
							height={width < 1200 ? (width - 0.08 * width) * 0.5625 : 675}
							playIcon={<Play />} // TODO : Doesnt work. ref: https://stackoverflow.com/q/69132970/12872199
							style={{ borderRadius: 30, overflow: "hidden" }}
							url="https://www.youtube.com/watch?v=L73A9fyyQqw"
						/>
					)}
				</Box>
			</main>

			<Footer />
		</>
	);
};
