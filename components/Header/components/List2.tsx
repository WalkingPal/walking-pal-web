import { Button } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface IList2 {}

export const List2: FC<IList2> = ({}) => {
	return (
		<>
			<Button variant="contained" sx={{ mx: "20px" }}>
				<Link href="/register">Register</Link>
			</Button>
		</>
	);
};
