import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { links } from "components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";

interface IList1 {
	mobile?: boolean;
}

export const List1: FC<IList1> = ({ mobile }) => {
	const router = useRouter();

	const handleClick = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
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
					<ListItemButton
						key={name}
						onClick={e => handleClick(e, route)}
						sx={{ borderRadius: 1 }}
					>
						<ListItemText>
							<Typography
								variant="body2"
								sx={{
									color: router.route === route ? "primary.main" : "#737373",
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
