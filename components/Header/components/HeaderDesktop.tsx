import { List1 } from "components/Header/components/List1";
import { List2 } from "components/Header/components/List2";
import { LogoWordmark } from "components/LogoWordmark";
import React, { FC } from "react";
import styles from "../header.module.scss";

export const HeaderDesktop: FC = () => {
	return (
		<>
			<div className={styles.left}>
				<List1 />
			</div>
			<LogoWordmark dark size={50} />
			<div className={styles.right}>
				<List2 />
			</div>
		</>
	);
};
