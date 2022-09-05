import { useWindowSize } from "hooks/useWindowResize";
import Head from "next/head";
import type { NextPage } from "next";
import styles from "./ErrorMessage.module.scss";
import { Error } from "assets/png";
import { Image } from "components/Image";
import { Typography } from "@mui/material";

export const ErrorMessage: NextPage = () => {
	const { width } = useWindowSize();

	return (
		<div>
			<Head>
				<title>WalkingPal</title>
				<meta
					name="description"
					content="The world's first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<main style={{ marginTop: 80 }}>
				<div className={styles.main}>
					<div className={styles.left}>
						<Image className={styles.about1} src={Error} alt="" />
					</div>
					<div className={styles.right}>
						<Typography
							color="#ffffffcc"
							align="center"
							variant="h2"
							pt={7}
							pb={4}
							mx={1}
							maxWidth="800px"
						>
							Ouppps! <br /> 404
						</Typography>
						<Typography
							variant="body1"
							align="center"
							mx={3}
							maxWidth="600px"
							sx={{
								color: "#ffffffcc",
								fontSize: "31px",
								fontWeight: "400",
								lineHeight: "42px",
							}}
						>
							Looks like this page is missing. Don’t worry though, our best man
							is on the case! <br /> meanwhile, please headback.
						</Typography>
					</div>
				</div>
			</main>
		</div>
	);
};
