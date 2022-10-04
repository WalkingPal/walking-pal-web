import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";
import { Dropdown } from "./Dropdown";

export const links = [
	{ name: "home", route: "/" },
	{ name: "about", route: "/about" },
	{ name: "FAQ", route: "/faq" },
	{
		name: "company",
		route: "/Company",
		subroutes: [
			{ name: "social impact", route: "/social" },
			{ name: "our team", route: "/team" },
			{ name: "careers", route: "/career" },
			{ name: "contact", route: "/contact" },
		],
	},
];

interface IList1 {
	mobile?: boolean;
}

export const List1: FC<IList1> = ({ mobile }) => {
	const router = useRouter();

	const handleClick = (
		e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
		route: string,
	) => {
		e.preventDefault();
		router.push(route);
	};

	return (
		<List
			sx={
				mobile
					? {
							display: "grid",
							width: "100%",
					  }
					: {
							display: "flex",
							justifyContent: "flex-start",
							width: "unset",
					  }
			}
		>
			{links.map(({ name, route, subroutes }) => {
				return (
					<ListItem key={name}>
						<ListItemButton
							onClick={(
								e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
							) => handleClick(e, route)}
							sx={{ borderRadius: 1 }}
							component="a"
							role="link"
						>
							<ListItemText>
								<Typography
									variant="body2"
									sx={{
										color: router.route === route ? "primary.main" : "#828282",
										textTransform: "capitalize",
										px: 2,
									}}
								>
									<link href={route}>{name}</link>
									<Select
										sx={{
											position: "absolute",
											top: 0,
											left: 0,
											opacity: 0,
											height: "100%",
											width: "100%",
										}}
									>
										<MenuItem value={10}>Social Impact</MenuItem>
										<MenuItem value={10}>Our Team</MenuItem>
										<MenuItem value={10}>Carriers</MenuItem>
										<MenuItem value={10}>Contact</MenuItem>
									</Select>
								</Typography>
							</ListItemText>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
};
