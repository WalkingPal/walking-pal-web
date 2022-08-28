import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { links } from "components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";

export const List1: FC = ({}) => {
	const router = useRouter();

	const handleClick = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
		route: string,
	) => {
		e.preventDefault();
		router.push(route);
	};

	return (
		<List sx={{ width: "100%" }}>
			{links.map(({ name, route }) => {
				return (
					<ListItemButton key={name} onClick={e => handleClick(e, route)}>
						<ListItemText>
							<Typography
								variant="body2"
								sx={{
									color: router.route === route ? "primary.main" : "#828282",
									textTransform: "capitalize",
									px: 2,
								}}
							>
								<Link href={route}>{name}</Link>
							</Typography>
						</ListItemText>
					</ListItemButton>
				);
			})}
		</List>
	);
};
