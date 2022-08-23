import type { NextPage } from "next";
import Head from "next/head";
import { Form } from "../support/Form";
import styles from "./support.module.scss";

export const Support: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Support</title>
				<meta
					name="description"
					content="The world's first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta
					name="keywords"
					content="home, walking, pal, buddy, walk, about"
				/>
			</Head>

			<main className={styles.main}>
				<Form />
			</main>
		</div>
	);
};
