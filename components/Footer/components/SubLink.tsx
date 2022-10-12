import { Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface ISubLink {
	link: {
		name: string;
		href: string;
	};
}

export const SubLink: FC<ISubLink> = ({ link }) => {
	return (
		<Link href={link.href} passHref>
			<Typography variant="body2" color="white">
				{link.name}
			</Typography>
		</Link>
	);
};
