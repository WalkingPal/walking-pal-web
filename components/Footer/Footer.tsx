import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import { Accent } from "components/Accent";
import { FooterLinks } from "components/Footer/components/FooterLinks";
import { LogoWordmark } from "components/LogoWordmark";
import { FC } from "react";
import {
	Github,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	Youtube,
	Discord,
} from "./components/Icons";
import styles from "./footer.module.scss";

export const Footer: FC = ({}) => {
	return (
		<Stack
			gap={2}
			p="80px 24px"
			bgcolor="#121212"
			alignItems="center"
			justifyContent="center"
			className={styles.main}
		>
			<FooterLinks />
			<Divider flexItem color="grey" sx={{ mx: { md: 9 }, my: 4 }} />
			<Stack
				direction={{ xs: "column", md: "row" }}
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				px={{ xs: 2, md: 9 }}
				gap={3}
			>
				<Box display="grid" alignItems="center" justifyContent="center" gap={3}>
					<LogoWordmark size={100} />
					<Box
						display="flex"
						gap={1}
						alignItems="center"
						justifyContent="space-around"
						sx={{ "& svg": { transform: "scale(1.3)" } }}
					>
						{socials.map((social, i) => {
							return (
								<Link
									href={social.link}
									target="_blank"
									key={"socail-" + i}
									aria-label={social.name}
								>
									{social.icon}
								</Link>
							);
						})}
					</Box>
				</Box>
				<Typography
					color="white"
					variant="h5"
					component="p"
					ml={{ xs: 1, md: 6 }}
					mr={{ xs: 1, md: 0 }}
					textAlign={{ xs: "center", md: "right" }}
					flexGrow={1}
					maxWidth={650}
				>
					Our<Accent>mission</Accent>is to change the way people cover their
					<Accent>last-mile</Accent>by making walking more fun and the
					<Accent>preferred</Accent>way to commute.
				</Typography>
			</Stack>
		</Stack>
	);
};

const socials = [
	{
		link: "https://www.instagram.com/walkingpal.in/",
		icon: <Instagram />,
		name: "Instagram",
	},
	{
		link: "https://www.linkedin.com/company/walkingpal/",
		icon: <Linkedin />,
		name: "Linkedin",
	},
	{
		link: "https://twitter.com/WalkingPal_in",
		icon: <Twitter />,
		name: "Twitter",
	},
	{
		link: "https://youtu.be/L73A9fyyQqw",
		icon: <Youtube />,
		name: "Youtube",
	},
	{
		link: "https://github.com/WalkingPal/walking-pal-web",
		icon: <Github />,
		name: "Github",
	},
	{
		link: "https://discord.com/invite/Et3aQTsW6a",
		icon: <Discord />,
		name: "Discord",
	},

	{
		link: "https://www.facebook.com/walkingpal.in",
		icon: <Facebook />,
		name: "Facebook",
	},
];
