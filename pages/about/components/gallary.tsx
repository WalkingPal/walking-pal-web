/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image, { ImageProps } from "next/image";
import { pic1 } from "assets/png";
import { pic2 } from "assets/png";
import { pic3 } from "assets/png";
import { pic4 } from "assets/png";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const Img = (props: any) => {
	return (
		<span
			className={props.className}
			style={{ minWidth: props.width, display: props.display }}
		>
			<Image alt="" {...props} />
		</span>
	);
};

export const Gallary = ({}) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Item>
						<Img src={pic1} />
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Img src={pic2} />
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Img src={pic4} />
					</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>
						<Img src={pic3} />
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
};
