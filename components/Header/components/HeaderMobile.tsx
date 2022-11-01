import { Box, Divider, Drawer, useTheme } from "@mui/material";
import { Hamburger } from "assets/svg";
import { List1 } from "components/Header/components/List1";
import { List2 } from "components/Header/components/List2";
import { LogoWordmark } from "components/LogoWordmark";
import React, { FC, useState } from "react";
import styles from "../header.module.scss";

export const HeaderMobile: FC = () => {
	const [isDrawerOpen, toggleDrawer] = useState(false);
	const { palette } = useTheme();
	return (
		<>
			<div className={styles.mobile}>
				<LogoWordmark dark size={50} />

				<Hamburger
					onClick={() => toggleDrawer(true)}
					color={palette.text.secondary}
					style={{ cursor: "pointer" }}
				/>
			</div>

			<Drawer
				anchor="right"
				sx={{ zIndex: 99999 }}
				open={isDrawerOpen}
				onClose={() => toggleDrawer(false)}
			>
				<Box
					width={280}
					role="presentation"
					onClick={() => toggleDrawer(false)}
					onKeyDown={() => toggleDrawer(false)}
				>
					<Box display="grid" gap={3} py={3}>
						<List1 mobile />

						<Divider />

						<List2 mobile />
					</Box>
				</Box>
			</Drawer>
		</>
	);
};
