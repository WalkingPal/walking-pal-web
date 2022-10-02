import Head from "next/head";
import type { NextPage } from "next";
import styles from "./404.module.scss";
import { Error } from "assets/png";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export const Error404: NextPage = () => {
	return (
		<>
			<Head>
				<title> 404 | Page Not Found </title>
				<meta
					name="description"
					content="Uh oh! 404 Not Found. looks like you got lost"
				/>
				<meta
					name="keywords"
					content="404, not, found, walking, pal, buddy, walk"
				/>
			</Head>

			<main className={styles.main}>
				<div className={styles.left}>
					<Image src={Error} alt="" />
				</div>
				<Box bgcolor="primary.main" color="#ffffffcc" className={styles.right}>
					<Typography variant="h1" pb={3}>
						Ouppps! <br /> 404
					</Typography>
					<Typography variant="h5">
						Looks like this page is missing or unavailable. If you think this is
						a mistake, don’t worry though, our best man is on the case! <br />
						<br /> Meanwhile, please headback.
					</Typography>
				</Box>
			</main>
		</>
	);
};
