import { Box, Link, Stack, Typography } from "@mui/material";
import { Accent } from "components/Accent";
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
import styles from './footer.module.scss'

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
export const Footer: FC = ({}) => {
	return (
		<Stack
			gap={2}
			padding="120px 24px 100px"
			bgcolor="#121212"
			alignItems="center"
			justifyContent="center"
		>
			{/* <Stack
        gap={{
          xs: 2,
          sm: 5,
          md: 7
        }}
        direction='row'
        flexWrap='wrap'
        justifyContent='space-between'
        width='100%'
        maxWidth={1030}
      >
        { footerLinks.map(link => (
          <LinkContainer 
            key={link.title}
            footerLink={link}
          />
        )) }
      </Stack>
      <Divider 
        flexItem
        color="grey"
      /> */}
			<Stack
				direction={{ xs: "column", md: "row" }}
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				padding={{ xs: 2, md: 9 }}
				gap={3}
			>
				<Box className={styles.main} display="grid" alignItems="center" justifyContent="center" gap={3}>
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
									// style={{fontSize: "50px"}}
									className={social.name === "Discord" ? styles.discordLink : null}
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
					px={3}
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
