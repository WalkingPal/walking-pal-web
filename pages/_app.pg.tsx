import React, { useRef } from "react";
import "./_globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { WPThemeProvider } from "theme";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Router, useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const showCompo = useRef(true);
	if (["/register"].includes(router.route)) {
		showCompo.current = false;
	}
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<WPThemeProvider>
				{showCompo.current && <Header />}
				<Component {...pageProps} />
				{showCompo.current && <Footer />}
			</WPThemeProvider>
		</React.Fragment>
	);
}

export default App;
