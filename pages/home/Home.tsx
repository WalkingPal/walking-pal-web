import { Footer } from "components/Footer";
import { Header } from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./home.module.scss";

export const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>WalkingPal</title>
				<meta name="description" content="WalkingPal ka desc" />
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<Header />
			<main className={styles.main}></main>

			<Footer />
		</>
	);
};
