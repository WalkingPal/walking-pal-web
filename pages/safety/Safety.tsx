import type { NextPage } from "next";
import Head from "next/head";
import SafetyTips from "pages/safety/components/SafetyTips.mdx";
import styles from "./safety.module.scss";

export const Safety: NextPage = () => {
	return (
		<>
			<Head>
				<title>Safety Tips</title>
				<meta name="description" content="WalkingPal Safety Tips" />
				<meta
					name="keywords"
					content="walking, pal, walkingpal, safety tips, safety"
				/>
			</Head>

			<div className={styles.main}>
				<SafetyTips />
			</div>
		</>
	);
};
