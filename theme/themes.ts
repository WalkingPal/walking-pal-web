import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const commonPalette: ThemeOptions = {
	shape: {
		borderRadius: 10,
	},
	typography: {
		htmlFontSize: 16,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		fontFamily:
			"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
		h1: {
			fontFamily:
				"'Outfit',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
			fontWeight: 800,
			lineHeight: 1.1142857142857143,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h2: {
			fontFamily:
				"'Outfit',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
			fontWeight: 800,
			lineHeight: 1.2222222222222223,
			color: "#E7EBF0",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h3: {
			fontFamily:
				"'Outfit',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontSize: "2.25rem",
			lineHeight: 1.2222222222222223,
			letterSpacing: 0.2,
			fontWeight: 400,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h4: {
			fontFamily:
				"'Outfit',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontSize: "1.75rem",
			lineHeight: 1.5,
			letterSpacing: 0.2,
			fontWeight: 400,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h5: {
			fontFamily:
				"'Outfit',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontSize: "1.5rem",
			lineHeight: 1.5,
			letterSpacing: 0.1,
			color: "#66B2FF",
			fontWeight: 400,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h6: {
			fontSize: "1.25rem",
			lineHeight: 1.5,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontWeight: 500,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		button: {
			textTransform: "initial",
			fontWeight: 700,
			letterSpacing: 0,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontSize: "0.875rem",
			lineHeight: 1.75,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		subtitle1: {
			fontSize: "1.125rem",
			lineHeight: 1.3333333333333333,
			letterSpacing: 0,
			fontWeight: 500,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.5,
			letterSpacing: 0,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontWeight: 400,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		body2: {
			fontSize: "0.875rem",
			lineHeight: 1.5,
			letterSpacing: 0,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontWeight: 400,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		caption: {
			display: "inline-block",
			fontSize: "0.75rem",
			lineHeight: 1.5,
			letterSpacing: 0,
			fontWeight: 700,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		allVariants: {
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		subtitle2: {
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.57,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		overline: {
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontWeight: 400,
			fontSize: "0.75rem",
			lineHeight: 2.66,
			textTransform: "uppercase",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
	},
};
export const lightTheme = createTheme({
	...commonPalette,
	palette: {
		mode: "light",
		primary: {
			main: "#FEF4F4",
		},
		secondary: {
			main: "#FF5959",
		},
		text: {
			primary: "#210B0B",
			secondary: "#767676",
			disabled: "#A3A3A3",
		},
		background: {
			default: "#E5E5E5",
			paper: "#FFFFFF",
		},
	},
});

export const darkTheme = createTheme({
	...commonPalette,
	palette: {
		mode: "dark",
		primary: {
			main: "#18191A",
		},
		secondary: {
			main: "#FF5959",
		},
		text: {
			primary: "#FFFFFF",
			secondary: "#808080",
			disabled: "#B0B3B8",
		},
		background: {
			default: "#121212",
			paper: "#121212",
		},
	},
});
