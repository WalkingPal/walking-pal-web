import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "pages/about/components/Hero";
import { OurStory } from "pages/about/components/OurStory";
import { Gallery } from "pages/about/components/Gallery";
import { ScrollToTop } from "components/ScrollToTop";
import styles from "./about.module.scss";

export const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>About us</title>
				<meta
					name="description"
					content="The world's first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta
					name="keywords"
					content="home, walking, pal, buddy, walk, about"
				/>
			</Head>

			<div className={styles.main}>
				<Hero />
				<Gallery />
				<OurStory />
				<ScrollToTop />
			</div>
		</>
	);
};
