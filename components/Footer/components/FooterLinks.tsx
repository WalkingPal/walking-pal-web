import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import {
	footerLinks,
	IFooterLink,
} from "components/Footer/components/footer-links";

export const FooterLinks: FC = () => {
	return (
		<Stack
			gap={{ xs: 4, sm: 5, md: 7 }}
			px={{ xs: 2, md: 9 }}
			direction="row"
			flexWrap="wrap"
			justifyContent="space-between"
			width="100%"
			// pb={5}
		>
			{footerLinks.map(link => (
				<LinkContainer key={link.title} footerLink={link} />
			))}
		</Stack>
	);
};

interface ILinkContainer {
	footerLink: IFooterLink;
}
const LinkContainer: FC<ILinkContainer> = ({ footerLink }) => {
	return (
		<Stack gap={2}>
			<Typography variant="h6" color="white">
				{footerLink.title}
			</Typography>
			<Stack gap={1}>
				{footerLink.links.map(link => (
					<Typography variant="body2" color="white" key={link.href}>
						<Link href={link.href} passHref>
							{link.name}
						</Link>
					</Typography>
				))}
			</Stack>
		</Stack>
	);
};
