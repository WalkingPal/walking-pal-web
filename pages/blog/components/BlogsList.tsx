import { FC, useState } from "react";
import { StaticImageData } from "next/image";
import { Box, Typography, Chip, Stack, Grid, Link } from "@mui/material";
import { Image } from "components/Image";

import { blogsData } from "../blogsData";
import styles from "../blog.module.scss";

interface IBlogsList {}
interface IBlogCard {
	title: String;
	subtitle: String;
	image: StaticImageData;
}

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
				{blogsData.map((data, i) => {
					return (
						<Grid item xs={12} md={6} key={i}>
							<BlogCard
								title={data.title}
								subtitle={data.subtitle}
								image={data.image}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

const BlogCard: FC<IBlogCard> = ({ title, subtitle, image }) => {
	return (
		<Link href="#" target="_blank" rel="noopener" className={styles.blogCard}>
			<div style={{ overflow: "hidden", borderRadius: "30px" }}>
				<Image
					alt="feature image"
					src={image}
					layout="responsive"
					objectFit="contain"
				/>
			</div>
			<Typography variant="h5" className={styles.blogTitle}>
				{title}
			</Typography>
			<Typography variant="body2">{subtitle}</Typography>
		</Link>
	);
};
