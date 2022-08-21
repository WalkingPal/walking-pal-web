import { alpha, Paper } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import { useWindowSize } from "hooks/useWindowResize";
import { HeaderDesktop } from "components/Header/components/HeaderDesktop";
import { HeaderMobile } from "components/Header/components/HeaderMobile";

export const links = [
	{ name: "home", route: "/" },
	{ name: "about", route: "/about" },
];

export const Header: FC = () => {
	const marginTop = 20;
	const headerRef = useRef<HTMLElement>(null);
	useEffect(() => {
		if (headerRef.current) {
			const height = headerRef.current.getBoundingClientRect().height;
			document.documentElement.style.setProperty(
				"--header-height",
				`${height + marginTop}px`,
			);
		}
	}, []);

	const { width } = useWindowSize();

	return (
		<>
			<header ref={headerRef} className={styles.header} style={{ marginTop }}>
				<Paper
					sx={t => ({
						background: alpha(t.palette.background.paper, 0.8),
						width: "100%",
						webkitBackdropFilter: "blur(20px)",
						backdropFilter: "blur(20px)",
						borderRadius: "16px",
						justifyContent: "center",
						display: "flex",
						alignItems: "center",
						padding: "8px 20px",
					})}
				>
					{!width || width < 1200 ? <HeaderMobile /> : <HeaderDesktop />}
				</Paper>
			</header>
			<div style={{ height: "calc(var(--header-height) + 5px)" }}></div>
		</>
	);
};
