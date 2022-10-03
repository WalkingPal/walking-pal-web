import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "pages/blog/components/Hero";

export const Blog: NextPage = () => {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta
					name="description"
					content="The world's first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta
					name="keywords"
					content="home, walking, pal, buddy, walk, about"
				/>
			</Head>

			<main
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Hero />
			</main>
		</>
	);
};
