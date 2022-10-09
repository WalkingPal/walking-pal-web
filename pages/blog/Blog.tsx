import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "pages/blog/components/Hero";
import { BlogsList } from "pages/blog/components/BlogsList";
import { Scroll } from "components/ScrollToTop";

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
					content="blog, walking, pal, buddy, walk, about"
				/>
			</Head>

			<main style={{ padding: "4vw", maxWidth: 1450, margin: "auto" }}>
				<Hero />
				<BlogsList />
				<Scroll />
			</main>
		</>
	);
};
