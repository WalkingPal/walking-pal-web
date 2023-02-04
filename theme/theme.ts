import { deepmerge } from "@mui/utils";
import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";

const systemFont = [
	"-apple-system",
	"BlinkMacSystemFont",
	'"Segoe UI"',
	"Roboto",
	'"Helvetica Neue"',
	"Arial",
	"sans-serif",
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
];

export const OutfitFont = ["Outfit", ...systemFont].join(",");
export const OpenSansFont = ["Open Sans", ...systemFont].join(",");
export const bodyColor = "#484848";
export const getDesignTokens = (mode: "light" | "dark") =>
	({
		palette: {
			mode,
			primary: {
				main: "#FF5959",
			},
			secondary: {
				main: "#F6BF51",
			},
			text: {
				primary: "#210B0B",
				secondary: "#767676",
				disabled: "#ABABAB",
				...(mode === "dark" && {
					primary: "#FFFFFF",
					secondary: "#808080",
					disabled: "#B0B3B8",
				}),
			},
			background: {
				default: "#E5E5E5",
				paper: "#FAFAFA",
				...(mode === "dark" && {
					default: "#121212",
					paper: "#121212",
				}),
			},
			error: { main: "#d32f2f" },
		},
		shape: {
			borderRadius: 10,
		},
		spacing: 10,
		typography: {
			htmlFontSize: 16,
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 700,
			fontFamily: OpenSansFont,
			h1: {
				fontSize: "clamp(3rem, 2.7120234375rem + 4.5vw, 8.4375rem)",
				fontWeight: 500,
				lineHeight: 1.1142857142857143,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			h2: {
				fontSize: "clamp(2.5rem, 2rem + 3vw, 6rem)",
				fontWeight: 400,
				lineHeight: 1.2222222222222223,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			h3: {
				fontSize: "clamp(2.25rem, 1.5870359375rem + 1.78575vw, 5rem)",
				fontWeight: 400,
				lineHeight: 1.2222222222222223,
				letterSpacing: 0.2,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			h4: {
				fontSize: "clamp(2rem, 1.2857rem + 1.4286vw, 3.6875rem)",
				fontWeight: 400,
				lineHeight: 1.5,
				letterSpacing: 0.2,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			h5: {
				fontSize: "1.5rem",
				fontWeight: 400,
				lineHeight: 1.5,
				letterSpacing: 0.1,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			h6: {
				fontSize: "1.25rem",
				fontWeight: 500,
				lineHeight: 1.5,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			subtitle1: {
				fontSize: "1.25rem",
				fontWeight: 400,
				lineHeight: 1.3333333333333333,
				letterSpacing: 0,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			subtitle2: {
				fontSize: "1rem",
				fontWeight: 500,
				lineHeight: 1.57,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			body1: {
				color: bodyColor,
				fontSize: "1.125rem",
				fontWeight: 400,
				lineHeight: 1.5,
				letterSpacing: 0,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
			},
			body2: {
				color: bodyColor,
				fontSize: "1rem",
				fontWeight: 400,
				lineHeight: 1.5,
				letterSpacing: 0,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
			},
			button: {
				textTransform: "initial",
				fontSize: "1.125rem",
				fontWeight: 400,
				lineHeight: "normal",
				letterSpacing: 0,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
				fontFamily: OutfitFont,
			},
			caption: {
				display: "inline-block",
				fontSize: "0.75rem",
				fontWeight: 400,
				lineHeight: 1.5,
				letterSpacing: 0,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
			},
			overline: {
				textTransform: "uppercase",
				fontSize: "0.75rem",
				fontWeight: 400,
				lineHeight: 2.66,
				scrollMarginTop: "calc(var(--header-height) + 32px)",
			},
			allVariants: {
				scrollMarginTop: "calc(var(--header-height) + 32px)",
			},
		},
	} as ThemeOptions);

export function getThemedComponents(theme: Theme): {
	components: Theme["components"];
} {
	const {
		palette: { primary },
	} = theme;
	return {
		components: {
			MuiInputLabel: {
				styleOverrides: {
					root: {
						fontWeight: 500,
						fontFamily: OutfitFont,
						color: "#ABABAB",
					},
					asterisk: {
						color: primary.main,
					},
				},
			},
			MuiButton: {
				defaultProps: {
					disableElevation: true,
				},
				styleOverrides: {
					root: ({ ownerState }) => ({
						padding: "12px 40px",
						...(ownerState.disabled && { color: "gray" }),
					}),
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						color: bodyColor,
						borderRadius: 1,
						"&:hover fieldset": {
							border: "solid 3px #E7E7E7 !important",
						},
						"&.Mui-focused fieldset": {
							border: "solid 3px #c4c4c4 !important",
						},
					},
					input: {
						fontWeight: 500,
						fontFamily: OutfitFont,
						background: "background.default",
					},
				},
			},
			MuiStep: {
				styleOverrides: {
					root: {
						padding: 0,
					},
				},
			},
			MuiStepConnector: {
				styleOverrides: {
					line: {
						border: "none",
					},
				},
			},
			MuiStepLabel: {
				styleOverrides: {
					iconContainer: {
						padding: 0,
					},
				},
			},
			MuiAlert: {
				styleOverrides: {
					icon: {
						alignItems: "center",
					},
				},
			},
			MuiSnackbar: {
				styleOverrides: {
					root: {
						alignItems: "center",
					},
				},
			},
		},
	};
}

const lightTheme = createTheme(getDesignTokens("light"));
export const brandingLightTheme = deepmerge(
	lightTheme,
	getThemedComponents(lightTheme),
);

const darkTheme = createTheme(getDesignTokens("dark"));
export const brandingDarkTheme = deepmerge(
	darkTheme,
	getThemedComponents(darkTheme),
);
