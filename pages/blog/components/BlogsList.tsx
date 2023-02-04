import { FC, useState } from "react";
import { StaticImageData } from "next/image";
import { Box, Typography, Chip, Grid, Link } from "@mui/material";
import { Image } from "components/Image";

import { blogsData } from "../blogsData";
import styles from "../blog.module.scss";

interface IBlogsList {}

export const BlogsList: FC<IBlogsList> = ({}) => {
	const [selected, setSelected] = useState(0);
	const tags = [
		"All",
		"Customers",
		"News",
		"Team",
		"Product Updates",
		"Designers",
	];
	return (
		<Box className={styles.blogsList}>
			<Box className={styles.tags}>
				{tags.map((tag, i) => (
					<Chip
						key={i}
						label={tag}
						variant={selected === i ? "filled" : "outlined"}
						onClick={() => setSelected(i)}
					/>
				))}
			</Box>
			<Grid container spacing={2}>
				{blogsData.map((blogData, i) => {
					return (
						<Grid item xs={12} md={6} key={i}>
							<BlogCard {...blogData} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

interface IBlogCard {
	title: string;
	subtitle: string;
	image: StaticImageData;
	href: string;
}

const BlogCard: FC<IBlogCard> = ({ title, subtitle, image, href }) => {
	return (
		<Link href={href} target="_blank" className={styles.blogCard}>
			<Image
				wrapstyle={{ overflow: "hidden", borderRadius: 3 }}
				alt=""
				src={image}
			/>
			<Typography variant="h5" mt={1}>
				{title}
			</Typography>
			<Typography variant="body2">{subtitle}</Typography>
		</Link>
	);
};
