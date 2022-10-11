import type { NextPage } from "next";
import Head from "next/head";
import { FAQsection } from "pages/faq/components/FAQsection";
import { Hero } from "pages/faq/components/Hero";
import { FeedbackForm } from "components/FeedbackForm";
import { ScrollToTop } from "components/ScrollToTop";
import styles from "./faq.module.scss";
const generalFAQs = [
	{
		faq: "Is WalkingPal free?",
		desc: "Yes, we don’t charge a single penny to our users.",
	},
	{
		faq: "When will it be publicly available to use?",
		desc: "We are currently in private beta stage. You could either register as an early user and become a beta tester or wait for the public release soon.",
	},
	{
		faq: "How does WalkingPal work?",
		desc: (
			<>
				WalkingPal scans all the nearby people that are in need of a walking
				buddy, and it connects you with your nearest walking buddy going towards
				the same direction and destination as you.
				<br />
				<strong>P.S.</strong> We won’t be sharing your exact destination with
				anyone for obvious security reasons.
			</>
		),
	},
	{
		faq: "What platforms do we support?",
		desc: "We will be launching our Android app first and subsequently it will be available on the Apple App Store in future.",
	},
	{
		faq: "Where can we download the app?",
		desc: "You can download WalkingPal on the Google Play Store post our private beta test. As of now you can register for it and we will notify you when it is available.",
	},
];

const TrustnSafetyFAQs = [
	{
		faq: "Is it safe to use?",
		desc: "No technology is 100% safe for everyone but we are working hard to make it at-least 99% safe for all our users. Your safety is our first priority.",
	},
	{
		faq: "What about fake users?",
		desc: "In order to minimise fake users, we will be verifying the identity of every user by a government approved ID, like passport, Aadhar Card, Etc. So that no one ends up with an undocumented person.",
	},
	{
		faq: "How will you ensure the safety of the users?",
		desc: (
			<>
				We have listed below the steps that we are taking to ensure your safety:
				<ul>
					<li>ID verification of every user.</li>
					<li>
						We will be tracking your whole journey once you get connected with a
						walking buddy, and you can also share you live location to your
						friends and family as well to be extra safe.
					</li>
					<li>
						After you start walking with your walking buddy there will be an SOS
						bubble pop up on the screen (kind of like a messenger bubble). If
						you are in danger or in an uncomfortable position you can just tap
						on that bubble and a notification will be sent to all your emergency
						contacts and to us as well and we will try our best to help you out
						in every possible way.
					</li>
				</ul>
			</>
		),
	},
	{
		faq: "What if I don’t want to go alone with a stranger?",
		desc: "If you are not comfortable walking alone with a stranger, we also have an option to create a walking group. You can add 2-3 more people to join with you in your journey.",
	},
];

export const FAQ: NextPage = () => {
	return (
		<>
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

			<div className={styles.main}>
				<Hero />
				<FAQsection title="General" faqs={generalFAQs} isOpen />
				<FAQsection title="Trust and Safety" faqs={TrustnSafetyFAQs} />
				<FeedbackForm />
				<ScrollToTop />
			</div>
		</>
	);
};
