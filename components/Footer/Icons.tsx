import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import youtube from "react-useanimations/lib/youtube";

export const Github = () => (
	<UseAnimations animation={github} size={35} strokeColor="#fff" loop={true} />
);

export const Facebook = () => (
	<UseAnimations
		animation={facebook}
		size={35}
		strokeColor="#fff"
		loop={true}
	/>
);

export const Twitter = () => (
	<UseAnimations animation={twitter} size={35} strokeColor="#fff" loop={true} />
);

export const Linkedin = () => (
	<UseAnimations
		animation={linkedin}
		size={35}
		strokeColor="#fff"
		loop={true}
	/>
);

export const Instagram = () => (
	<UseAnimations
		animation={instagram}
		size={35}
		strokeColor="#fff"
		loop={true}
	/>
);

export const Youtube = () => (
	<UseAnimations animation={youtube} size={35} strokeColor="#fff" loop={true} />
);
