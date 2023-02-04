import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "pages/about/components/Hero";
import { OurStory } from "pages/about/components/OurStory";
import { Gallery } from "pages/about/components/Gallery";
import styles from "./about.module.scss";

export const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>About us</title>
				<meta name="description" content="About us - WalkingPal" />
				<meta
					name="keywords"
					content="walking, pal, walkingpal, about us, about"
				/>
			</Head>

			<div className={styles.main}>
				<Hero />
				<Gallery />
				<OurStory />
			</div>
		</>
	);
};
