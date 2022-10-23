import React, { useRef } from "react";
import "./_globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { WPThemeProvider } from "theme";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import { PageTransition } from "components/PageTransition";
import { PageLoadProgress } from "components/PageLoadProgress";
import { ScrollToTop } from "components/ScrollToTop";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const showHeaderCompo = useRef(true);
	const showFooterCompo = useRef(true);
	const allowPadding = useRef(true);

	showHeaderCompo.current = ["/register"].includes(router.route) ? false : true;
	allowPadding.current = ["/404"].includes(router.route) ? false : true;
	showFooterCompo.current = ["/register", "/404"].includes(router.route)
		? false
		: true;
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<ParallaxProvider>
				<WPThemeProvider>
					<PageLoadProgress />
					{showHeaderCompo.current && (
						<Header allowPadding={allowPadding.current} />
					)}
					<PageTransition>
						<Component {...pageProps} />
						<ScrollToTop />
					</PageTransition>
					{showFooterCompo.current && <Footer />}
				</WPThemeProvider>
			</ParallaxProvider>
		</React.Fragment>
	);
}

export default App;
