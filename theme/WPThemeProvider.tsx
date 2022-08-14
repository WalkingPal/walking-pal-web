import { brandingDarkTheme, brandingLightTheme } from "./theme";
import { Context, createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { FCC } from "types/IReact";

let ThemeUpdateContext: Context<() => void>;
export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

export const WPThemeProvider: FCC = ({ children }) => {
	const [theme, setTheme] = useState(brandingLightTheme);

	const toggleTheme = () => {
		setTheme(() =>
			theme.palette.mode === "light" ? brandingDarkTheme : brandingLightTheme,
		);
	};
	ThemeUpdateContext = createContext(toggleTheme);

	return (
		<ThemeProvider theme={theme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeProvider>
	);
};
