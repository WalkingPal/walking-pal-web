import UseAnimations from "react-useanimations";
import { motion } from "framer-motion";
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import youtube from "react-useanimations/lib/youtube";

export const Facebook = () => (
	<UseAnimations
		animation={facebook}
		size={26}
		strokeColor="#fff"
		autoplay={true}
		loop={true}
	/>
);

export const Twitter = () => (
	<UseAnimations
		animation={twitter}
		size={26}
		strokeColor="#fff"
		autoplay={true}
		loop={true}
	/>
);

export const Linkedin = () => (
	<UseAnimations
		animation={linkedin}
		size={26}
		strokeColor="#fff"
		autoplay={true}
		loop={true}
	/>
);

export const Instagram = () => (
	<UseAnimations
		animation={instagram}
		size={26}
		strokeColor="#fff"
		autoplay={true}
		loop={true}
	/>
);

export const Youtube = () => (
	<UseAnimations
		animation={youtube}
		size={26}
		strokeColor="#fff"
		autoplay={true}
		loop={true}
	/>
);
