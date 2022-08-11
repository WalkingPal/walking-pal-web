import { Footer } from "components/Footer";
import { Hero } from "components/Hero/Hero";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.scss";


const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>WalkingPal</title>
				<meta name="description" content="WalkingPal ka desc" />
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<main className={styles.main}></main>

			<Hero />
			<Footer />
		</div>
	);
};

export default Home;
