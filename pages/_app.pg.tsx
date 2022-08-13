import "./_globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { useTheme, WPThemeProvider } from "theme";
import { ThemeProvider } from "@emotion/react";
import { FC } from "react";

function Root(appProps: AppProps) {
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<WPThemeProvider>
				<App appProps={appProps} />
			</WPThemeProvider>
		</React.Fragment>
	);
}

interface IApp {
	appProps: AppProps;
}
const App: FC<IApp> = ({ appProps }) => {
	const { Component, pageProps } = appProps;
	const theme = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default Root;
