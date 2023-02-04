import type { NextPage } from "next";
import Head from "next/head";
import PrivacyPolicy from "pages/privacy/components/PrivacyPolicy.mdx";
import styles from "./privacy.module.scss";

export const Privacy: NextPage = () => {
	return (
		<>
			<Head>
				<title>Privacy Plicy</title>
				<meta name="description" content="WalkingPal Privacy Policy" />
				<meta
					name="keywords"
					content="walking, pal, walkingpal, privacy policy, privacy, policy"
				/>
			</Head>

			<div className={styles.main}>
				<PrivacyPolicy />
			</div>
		</>
	);
};
