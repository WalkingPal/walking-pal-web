import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { IFooterLink } from "./footer-links";
import { SubLink } from "./SubLink";

interface Props {
	footerLink: IFooterLink;
}

export const LinkContainer: FC<Props> = ({ footerLink }) => {
	return (
		<Stack
			gap="20px"
			// flexGrow={1}
			width="100%"
			maxWidth={155}
		>
			<Typography variant="h6" color="white">
				{footerLink.title}
			</Typography>
			<Stack gap="10px">
				{footerLink.links.map(link => (
					<SubLink key={link.name} link={link} />
				))}
			</Stack>
		</Stack>
	);
};
