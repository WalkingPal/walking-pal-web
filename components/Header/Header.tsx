import { alpha, Paper } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import { useWindowSize } from "hooks/useWindowResize";
import { HeaderDesktop } from "components/Header/components/HeaderDesktop";
import { HeaderMobile } from "components/Header/components/HeaderMobile";
import { Dropdown } from "components/Header/components/Dropdown";

export const links = [
	{ name: "home", route: "/" },
	{ name: "about", route: "/about" },
	{ name: "FAQ", route: "/faq" },
	{ name: "company", route: "/Company" },
];

interface IHeader {
	allowPadding: boolean;
}
export const Header: FC<IHeader> = ({ allowPadding }) => {
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
						webkitBackdropFilter: "blur(10px)",
						backdropFilter: "blur(10px)",
						borderRadius: "16px",
						justifyContent: "center",
						display: "flex",
						alignItems: "center",
						padding: "8px 20px",
					})}
					elevation={0}
				>
					{(() => {
						if (width) {
							return width < 1200 ? <HeaderMobile /> : <HeaderDesktop />;
						}
					})()}
				</Paper>
				<Dropdown />
			</header>
			<div
				style={{
					height: allowPadding ? "calc(var(--header-height) + 5px)" : 0,
				}}
			/>
		</>
	);
};
