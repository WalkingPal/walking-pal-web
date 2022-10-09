import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface IList2 {
	mobile?: boolean;
}

export const List2: FC<IList2> = ({}) => {
	const currentRoute = useRouter().route;
	return (
		<>
			<Button
				role="link"
				component="a"
				sx={{
					mx: "20px",
					color: currentRoute === "/faq" ? "primary.main" : "#828282",
				}}
				href="/faq"
			>
				FAQs
			</Button>
			<Button
				role="link"
				component="a"
				variant="contained"
				sx={{ mx: "20px" }}
				href="/register"
			>
				Register
			</Button>
		</>
	);
};
