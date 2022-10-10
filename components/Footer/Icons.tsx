import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import youtube from "react-useanimations/lib/youtube";
import { Discord as DiscordSVG } from "assets/svg";

const styles = {
	size: 30,
	strokeColor: "#fff",
};

export const Github = () => (
	<UseAnimations animation={github} {...styles} loop={true} />
);

export const Facebook = () => (
	<UseAnimations animation={facebook} {...styles} loop={true} />
);

export const Twitter = () => (
	<UseAnimations animation={twitter} {...styles} loop={true} />
);

export const Linkedin = () => (
	<UseAnimations animation={linkedin} {...styles} loop={true} />
);

export const Instagram = () => (
	<UseAnimations animation={instagram} {...styles} loop={true} />
);

export const Youtube = () => (
	<UseAnimations animation={youtube} {...styles} loop={true} />
);

export const Discord = () => <DiscordSVG {...styles} />;
