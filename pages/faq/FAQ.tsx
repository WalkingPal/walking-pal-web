import type { NextPage } from "next";
import Head from "next/head";
import { FAQsection } from "pages/faq/components/FAQsection";
import { Hero } from "pages/faq/components/Hero";
import styles from "./faq.module.scss";

const generalFAQs = [
	{
		faq: "Is WalkingPal free?",
		desc: "Yes, we don’t charge a single penny to our users.",
	},
	{
		faq: "What Platforms do we support",
		desc: "WalkingPal App is supported on Android only. We are planning to target iOS users in the near future.",
	},
	{
		faq: "Where can I download the App",
		desc: "App will be available on Google Play Store post our App's beta-testing phase.",
	},
];

export const FAQ: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>FAQs</title>
				<meta
					name="description"
					content="Frequently Asked Question - WalkingPal"
				/>
				<meta
					name="keywords"
					content="home, walking, pal, buddy, walk, faqs, faq"
				/>
			</Head>

			<main style={{ marginBottom: 80 }}>
				<Hero />
				<FAQsection title="General" faqs={generalFAQs} />
				{/* <FAQsection title="Security" /> */}
			</main>
		</div>
	);
};
