import { FacebookOutlined } from "@mui/icons-material";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import { Insta, Linkedin, Twitter, YouTube } from "assets/svg";
import { Accent } from "components/Accent";
import { LogoWordmark } from "components/LogoWordmark";
import { FC } from "react";
import { footerLinks } from "./footer-links";
import styles from "./footer.module.scss";
import { LinkContainer } from "./LinkContainer";

const socials = [
	{
		link: "https://www.facebook.com/walkingpal.in",
		icon: <FacebookOutlined sx={{ color: "#fff" }} />,
		name: "Facebook",
	},
	{
		link: "https://twitter.com/WalkingPal_in",
		icon: <Twitter color="#fff" />,
		name: "Twitter",
	},
	{
		link: "https://www.linkedin.com/company/walkingpal/",
		icon: <Linkedin color="#fff" />,
		name: "Linkedin",
	},
	{
		link: "https://www.instagram.com/walkingpal.in/",
		icon: <Insta color="#fff" />,
		name: "Instagram",
	},
	{
		link: "https://youtu.be/L73A9fyyQqw",
		icon: <YouTube color="#fff" />,
		name: "Youtube",
	},
];
export const Footer: FC = ({}) => {
	return (
		<Stack
			gap="24px"
			padding="120px 24px 100px"
			bgcolor="#000000"
			alignItems="center"
			justifyContent="center"
		>
			{/* <Stack
        gap={{
          xs: '24px',
          sm: '48px',
          md: '72px'
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
				padding={{ xs: "24px", md: "90px" }}
				gap="30px"
			>
				<Box display="grid" alignItems="center" justifyContent="center" gap={3}>
					<LogoWordmark size={100} />
					<Box
						display="flex"
						gap={2}
						alignItems="center"
						justifyContent="center"
						style={{ transform: "scale(1.3)" }}
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
					px={3}
					textAlign={{ xs: "center", md: "right" }}
					flexGrow={1}
					maxWidth={650}
				>
					Our<Accent>mission</Accent>is to change the people cover their
					<Accent>last-mile</Accent>by making walking more fun and the
					<Accent>preferred</Accent>way to commute.
				</Typography>
			</Stack>
		</Stack>
	);
};
