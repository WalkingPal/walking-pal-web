import { FC } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import {
	getstarted1,
	getstarted2,
	getstarted3,
	cylinder,
	ring,
} from "assets/png";
import styles from "./started.module.scss";

export const GetStarted: FC = () => {
	return (
		<Box className={styles.getstarted}>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Typography
					variant="h3"
					component="h2"
					textAlign="center"
					pt={3}
					maxWidth={500}
				>
					Ready to get started?
				</Typography>
				<Typography variant="h5" pb={2} textAlign="center">
					Download the app and sign up now!
				</Typography>
				<Box sx={{ mb: { xs: 2, md: 5 } }}>
					<Button variant="contained" color="info">
						<Link href="/">Download</Link>
					</Button>
				</Box>
			</Box>
			<Box className={styles.content}>
				<Box
					className={styles.ring}
					sx={{ display: { xs: "none", md: "flex" } }}
				>
					<Image src={ring} alt={"altText"} />
				</Box>
				<Box
					className={styles.cylinder}
					sx={{ display: { xs: "none", md: "flex" } }}
				>
					<Image src={cylinder} alt={"altText"} />
				</Box>
				<Box className={styles.app}>
					<Box component="span" className={styles.imagebox} mr={-4}>
						<Image
							src={getstarted1}
							className={styles.appimage}
							alt={"altText"}
						/>
					</Box>
					<Box component="span" className={styles.imagebox} zIndex={1}>
						<Image src={getstarted2} alt={"altText"} />
					</Box>
					<Box component="span" className={styles.imagebox} ml={-4}>
						<Image
							src={getstarted3}
							className={styles.appimage}
							alt={"altText"}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
