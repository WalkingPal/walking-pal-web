import {
	Box,
	Button,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
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
			<Typography variant="h3">We have this to say</Typography>
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
					<Typography>
						Sed voluptas ipsa molitia fugit sed hic voluptatem maxime fugiat.
						Voluptate corporis ut dolor.
					</Typography>
				</Box>
				<Paper sx={{ m: "40px auto", mr: { sm: 0 }, px: 2 }} elevation={3}>
					<Box
						display="grid"
						alignContent="center"
						gap={5}
						position="relative"
						minHeight={500}
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
						<Stack gap={2}>
							<TextField
								label="Email"
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<Button variant="contained">Subscribe</Button>
						</Stack>
					</Box>
				</Paper>
			</Box>
		</Box>
	);
};
