import { Box, Button, TextField, Typography } from "@mui/material";
import { Accent } from "components/Accent";
import { Image } from "components/Image";
import { FC, useState } from "react";
import { blog1, shape1 } from "../../../assets/png/index";
import styles from "../blog.module.scss";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	const [email, setEmail] = useState("");
	return (
		<Box className={styles.blog_page_container}>
			<Typography variant="h3" pt={7} mx={1}>
				We have this to say
				<Typography pt={2} mx={1} variant="h5">
					Stay up to date on the latest from
					<Accent>WalkingPal</Accent>
				</Typography>
			</Typography>
			<Box pt={5} display="grid" className={styles.grid_container1}>
				<Box display="flex" flexDirection="column" className={styles.grid_col1}>
					<Image src={blog1} alt="" />
					<Box>
						<Typography pt={2} variant="h5">
							What it takes to get a design system built in 2022
						</Typography>
						<Typography pt={0.5}>
							Sed voluptas ipsa molitia fugit sed hic voluptatem maxime fugiat.
							Voluptate corporis ut dolor.
						</Typography>
					</Box>
				</Box>
				<Box
					borderRadius="30px"
					bgcolor="#fafafa"
					className={styles.grid_col2}
					display="flex"
					alignItems="center"
					flexDirection="column"
					justifyContent="center"
					gap={5}
					px={2.5}
					position="relative"
					minHeight="500px"
				>
					<div className={styles.shape1}>
						<Image src={shape1} alt="" />
					</div>
					<Typography
						pt={2}
						mx={1}
						variant="h5"
						maxWidth={300}
						textAlign="start"
						fontWeight={400}
						marginRight="auto"
						fontSize={32}
						lineHeight="38.4px"
					>
						Our mission is enabling the magic of coding without learning to
						code.
					</Typography>
					<Box display="flex" width="100%" flexDirection="column" gap={2.5}>
						<TextField
							label="Email"
							variant="outlined"
							type="email"
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
							fullWidth
						/>
						<Button
							variant="contained"
							fullWidth
							style={{ backgroundColor: "white", border: "3px solid #efefef" }}
						>
							<Typography color="#FF5959">Susbcribe</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
