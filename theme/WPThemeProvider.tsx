import { darkTheme, lightTheme } from "./themes";
import { Context, createContext, useContext, useState } from "react";
import { Theme, ThemeProvider } from "@mui/material";
import { FCC } from "types/IReact";

let ThemeContext: Context<Theme>;
let ThemeUpdateContext: Context<() => void>;

export function useTheme() {
	return useContext(ThemeContext);
}
export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

export const WPThemeProvider: FCC = ({ children }) => {
	const [theme, setTheme] = useState(lightTheme);

	const toggleTheme = () => {
		setTheme(() => (theme.palette.mode === "light" ? darkTheme : lightTheme));
	};

	ThemeContext = createContext(lightTheme);
	ThemeUpdateContext = createContext(toggleTheme);

	return (
		<ThemeProvider theme={theme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeProvider>
	);
};
