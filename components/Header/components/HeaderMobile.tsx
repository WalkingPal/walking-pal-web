import { Box, Divider, Drawer } from "@mui/material";
import { Hamburger } from "assets/svg";
import { List1 } from "components/Header/components/List1";
import { List2 } from "components/Header/components/List2";
import { LogoWordmark } from "components/LogoWordmark";
import React, { FC, useState } from "react";
import styles from "../header.module.scss";

export const HeaderMobile: FC = () => {
	const [isDrawerOpen, toggleDrawer] = useState(false);

	return (
		<>
			<div className={styles.mobile}>
				<LogoWordmark dark size={50} />

				<Hamburger
					onClick={() => toggleDrawer(true)}
					color="#767676"
					style={{ cursor: "pointer" }}
				/>
			</div>

			<Drawer
				anchor="right"
				open={isDrawerOpen}
				onClose={() => toggleDrawer(false)}
			>
				<Box
					sx={{ width: 280 }}
					role="presentation"
					onClick={() => toggleDrawer(false)}
					onKeyDown={() => toggleDrawer(false)}
				>
					<div
						style={{
							display: "grid",
							gap: "30px",
							padding: "30px 20px",
						}}
					>
						<List1 />

						<Divider />

						<List2 />
					</div>
				</Box>
			</Drawer>
		</>
	);
};
