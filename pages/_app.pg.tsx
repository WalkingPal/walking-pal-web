import React from "react";
import "./_globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { WPThemeProvider } from "theme";

function App({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<WPThemeProvider>
				<Component {...pageProps} />
			</WPThemeProvider>
		</React.Fragment>
	);
}

export default App;
