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
import { MDXProvider } from "@mdx-js/react";
import { bodyColor } from "theme/theme";

const components = {
	// h1: Header,
	p: (props: any) => <p {...props} style={{ color: bodyColor }} />,
	li: (props: any) => <li {...props} style={{ color: bodyColor }} />,
	strong: (props: any) => <strong {...props} style={{ color: "#000" }} />,
};
function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const showHeaderCompo = useRef(true);
	const showFooterCompo = useRef(true);
	const allowPadding = useRef(true);
	const showScrollToTopComp = useRef(true);

	showHeaderCompo.current = ["/register"].includes(router.route) ? false : true;
	allowPadding.current = ["/404"].includes(router.route) ? false : true;
	showFooterCompo.current = ["/register", "/404"].includes(router.route)
		? false
		: true;
	showScrollToTopComp.current = ["/register", "/404"].includes(router.route)
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
			<MDXProvider components={components}>
				<ParallaxProvider>
					<WPThemeProvider>
						<PageLoadProgress />
						{showHeaderCompo.current && (
							<Header allowPadding={allowPadding.current} />
						)}
						<PageTransition>
							<Component {...pageProps} />
							{showFooterCompo.current && <ScrollToTop />}
						</PageTransition>
						{showFooterCompo.current && <Footer />}
					</WPThemeProvider>
				</ParallaxProvider>
			</MDXProvider>
		</React.Fragment>
	);
}

export default App;
