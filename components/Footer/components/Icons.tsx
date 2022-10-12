import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import youtube from "react-useanimations/lib/youtube";
import { Discord as DiscordSVG } from "assets/svg";

const commonIconStyles = {
	size: 30,
	strokeColor: "#fff",
};

export const Github = () => (
	<UseAnimations animation={github} {...commonIconStyles} />
);

export const Facebook = () => (
	<UseAnimations animation={facebook} {...commonIconStyles} />
);

export const Twitter = () => (
	<UseAnimations animation={twitter} {...commonIconStyles} />
);

export const Linkedin = () => (
	<UseAnimations animation={linkedin} {...commonIconStyles} />
);

export const Instagram = () => (
	<UseAnimations animation={instagram} {...commonIconStyles} />
);

export const Youtube = () => (
	<UseAnimations animation={youtube} {...commonIconStyles} />
);

export const Discord = () => (
	<DiscordSVG color={commonIconStyles.strokeColor} />
);
