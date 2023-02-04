import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, MouseEvent, useState } from "react";

export const links = [
	{ name: "home", pageroute: "/" },
	{ name: "about", pageroute: "/about" },
	// {
	// 	name: "company",
	// 	pageroute: "/company",
	// 	subroutes: [
	// 		{ name: "social impact", subroute: "#social" },
	// 		{ name: "our team", subroute: "#team" },
	// 		{ name: "careers", subroute: "#career" },
	// 		{ name: "contact", subroute: "#contact" },
	// 	],
	// },
];

interface IList1 {
	mobile?: boolean;
}

export const List1: FC<IList1> = ({ mobile }) => {
	return (
		<List
			sx={
				mobile
					? { display: "grid", width: "100%" }
					: { display: "flex", justifyContent: "flex-start", width: "unset" }
			}
		>
			{links.map(link => {
				return (
					<ListItem key={link.name}>
						<L1Item {...link} />
					</ListItem>
				);
			})}
		</List>
	);
};
interface IL1Item {
	name: string;
	pageroute: string;
	subroutes?: {
		name: string;
		subroute: string;
	}[];
}

export const L1Item: FC<IL1Item> = ({ name, pageroute, subroutes }) => {
	const router = useRouter();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [isHovered, setHovered] = useState(false);

	const handleMouseEnter = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
	) => {
		setAnchorEl(e.currentTarget);
		setHovered(true);
	};

	const handleClick = (
		e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
	) => {
		e.stopPropagation();
		e.preventDefault();
		router.route !== pageroute && router.push(pageroute);
	};

	const handleClose = () => {
		setHovered(false);
		setAnchorEl(null);
	};

	return (
		<div onMouseEnter={handleMouseEnter} style={{ width: "100%" }}>
			<ListItemButton
				onClick={handleClick}
				sx={{ borderRadius: 1 }}
				component="a"
				role="link"
			>
				<ListItemText>
					<Typography
						variant="body2"
						sx={{
							color:
								router.route === pageroute ? "primary.main" : "text.secondary",
							textTransform: "capitalize",
							px: 2,
						}}
						align="center"
					>
						{name}
					</Typography>
				</ListItemText>
			</ListItemButton>
			{subroutes && (
				<Menu
					open={isHovered}
					onClose={handleClose}
					anchorEl={anchorEl}
					sx={{ zIndex: 99999 }}
				>
					<div onMouseLeave={() => setHovered(false)}>
						{subroutes.map(({ name, subroute }) => (
							<MenuItem
								key={name}
								onClick={() => {
									router.route !== pageroute &&
										router.push(pageroute + subroute);
									handleClose();
								}}
								component="a"
								role="link"
								href={subroute}
								sx={{ textTransform: "capitalize" }}
							>
								{name}
							</MenuItem>
						))}
					</div>
				</Menu>
			)}
		</div>
	);
};
