import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import { links } from "components/Header";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";

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
			{links.map(({ name, route }) => {
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
									{name}
								</Typography>
							</ListItemText>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
};
