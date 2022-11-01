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
				<meta
					name="description"
					content="The world-s first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta name="keywords" content="company, walking, pal, buddy, walk" />
			</Head>

			<div className={styles.main}>
				<Hero />
				<Data />
				<Story />
				<Team />
				<Career />
			</div>
		</>
	);
};
