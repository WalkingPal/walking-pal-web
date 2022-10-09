import React, { useEffect, useState } from "react";
import styles from "./scroll.module.scss";
import { UpArrow } from "assets/svg";

export const Scroll = () => {
	const [isVisible, setIsVisible] = useState(false);

	const goToBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		let heightToHidden = 20;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > heightToHidden) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	return (
		<div>
			{isVisible && (
				<div className={styles.scroll} onClick={goToBtn}>
					<UpArrow />
				</div>
			)}
		</div>
	);
};
