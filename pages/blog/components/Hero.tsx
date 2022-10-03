import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Accent } from "components/Accent";
import { Image } from "components/Image";
import { FC, useState } from "react";
import { blog1, shape1 } from "../../../assets/png/index";
import styles from "../blog.module.scss";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	const [email, setEmail] = useState("");
	return (
		<Box className={styles.hero}>
			<Typography variant="h3" pt={7}>
				We have this to say
			</Typography>
			<Typography variant="h5" pt={2}>
				Stay up to date on the latest from
				<Accent>WalkingPal</Accent>
			</Typography>
			<Box
				gap={2}
				pt={5}
				display="flex"
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="center"
			>
				<Box display="grid" minWidth={300} width={{ sm: "60%" }}>
					<Image src={blog1} alt="" />
					<Typography pt={2} variant="h5">
						What it takes to get a design system built in 2022
					</Typography>
					<Typography pt={0.5}>
						Sed voluptas ipsa molitia fugit sed hic voluptatem maxime fugiat.
						Voluptate corporis ut dolor.
					</Typography>
				</Box>
				<Paper sx={{ m: "40px auto", mr: { sm: 0 }, px: 2.5 }}>
					<Box
						borderRadius="30px"
						display="grid"
						alignContent="center"
						justifyContent="center"
						gap={5}
						position="relative"
						minHeight="500px"
					>
						<Image className={styles.shape1} src={shape1} alt="" />
						<Typography
							pt={2}
							variant="h4"
							maxWidth={300}
							fontWeight={400}
							fontSize={32}
						>
							Our mission is enabling the magic of coding without learning to
							code.
						</Typography>
						<Box display="flex" width="100%" flexDirection="column" gap={2.5}>
							<TextField
								label="Email"
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								fullWidth
							/>
							<Button
								fullWidth
								sx={{
									backgroundColor: "white",
									border: "3px solid #efefef",
									color: "primary.main",
								}}
							>
								Subscribe
							</Button>
						</Box>
					</Box>
				</Paper>
			</Box>
		</Box>
	);
};
