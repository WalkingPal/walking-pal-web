import type { NextPage } from "next";
import Head from "next/head";
import styles from "./faq.module.scss";

export const FAQ: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>FAQs</title>
				<meta
					name="description"
					content="Frequently Asked Question - WalkingPal"
				/>
				<meta
					name="keywords"
					content="home, walking, pal, buddy, walk, faqs, faq"
				/>
			</Head>

			<main className={styles.main}></main>
		</div>
	);
};
