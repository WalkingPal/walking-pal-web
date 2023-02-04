import type { NextPage } from "next";
import Head from "next/head";
import { Story } from "pages/company/components/Story";
import { Data } from "pages/company/components/Data";
import { Hero } from "pages/company/components/Hero";
import { Career } from "./components/Career";
import styles from "./company.module.scss";
import { Team } from "./components/Team";

export const Company: NextPage = () => {
	return (
		<>
			<Head>
				<title>Company</title>
				<meta name="description" content="Company - WalkingPal" />
				<meta name="keywords" content="company, walking, pal, walkingpal" />
			</Head>

			<div className={styles.main}>
				<Hero />
				{/* <Data /> */}
				{/* <Story /> */}
				<Team />
				{/* <Career /> */}
			</div>
		</>
	);
};
