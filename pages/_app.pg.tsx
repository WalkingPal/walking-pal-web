import React, { FC } from "react";
import "./_globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { WPThemeProvider } from "theme";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const App: FC<AppProps> = ({ Component, pageProps }) => {
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
};

export default App;
