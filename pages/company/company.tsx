import { useWindowSize } from "hooks/useWindowResize";
import type { NextPage } from "next";
import Head from "next/head";
import { Data } from "pages/company/components/Data";

export const company: NextPage = () => {
	const { width } = useWindowSize();

	return (
		<div style={{ position: "relative" }}>
			<Head>
				<title>WalkingPal</title>
				<meta
					name="description"
					content="The world-s first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta name="keywords" content="home, walking, pal, buddy, walk" />
			</Head>

			<main style={{ marginBottom: 80 }}>
				
				<Data />

			</main>
		</div>
	);
};
