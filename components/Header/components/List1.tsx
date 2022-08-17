import { Typography } from "@mui/material";
import { links } from "components/Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface IList1 {}

export const List1: FC<IList1> = ({}) => {
	const router = useRouter();

	return (
		<>
			{links.map(({ name, route }) => {
				return (
					<Typography
						variant="body2"
						sx={{
							color: router.route === route ? "primary.main" : "#828282",
							textTransform: "capitalize",
							mx: "20px",
						}}
						key={name}
					>
						<Link href={route}>{name}</Link>
					</Typography>
				);
			})}
		</>
	);
};
