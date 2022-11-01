import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { IFooterLink } from "./footer-links";
import { SubLink } from "./SubLink";

interface ILinkContainer {
	footerLink: IFooterLink;
}

export const LinkContainer: FC<ILinkContainer> = ({ footerLink }) => {
	return (
		<Stack gap={2} width="100%" maxWidth={155}>
			<Typography variant="h6" color="white">
				{footerLink.title}
			</Typography>
			<Stack gap={1}>
				{footerLink.links.map(link => (
					<SubLink key={link.name} link={link} />
				))}
			</Stack>
		</Stack>
	);
};
