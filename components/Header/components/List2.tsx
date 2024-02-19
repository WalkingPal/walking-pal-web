import { Button } from "@mui/material";
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
					mx: 2,
					color: currentRoute === "/blog" ? "primary.main" : "text.secondary",
					"&:hover": { backgroundColor: "#0000000a" },
				}}
				href="/blog"
			>
				Blog
			</Button>
			<Button
				role="link"
				component="a"
				sx={{
					mx: 2,
					color: currentRoute === "/faq" ? "primary.main" : "text.secondary",
					"&:hover": { backgroundColor: "#0000000a" },
				}}
				href="/faq#contact"
			>
				Support
			</Button>
			{/* <Button
				role="link"
				component="a"
				variant="contained"
				sx={{ mx: 2 }}
				href="/register"
			>
				Register
			</Button> */}
		</>
	);
};
