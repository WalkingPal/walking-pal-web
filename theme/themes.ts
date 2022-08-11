import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CSSProperties } from "react";

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		textXl: true;
		textLg: true;
		textMd: true;
		textSm: true;
		textXs: true;
	}
}

interface WPTypographyOptions extends TypographyOptions {
	textXl: CSSProperties;
	textLg: CSSProperties;
	textMd: CSSProperties;
	textSm: CSSProperties;
	textXs: CSSProperties;
}

const commonPalette: ThemeOptions = {
	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					position: "static",
					transform: "none",
					color: "#000000",
				},
				asterisk: {
					color: "#FF5959",
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.variant === "text" && {
						"&:hover": {
							backgroundColor: "initial",
						},
					}),
					...(ownerState.disabled && {
						color: "gray",
					}),
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: "10px",
				},
				input: {
					fontSize: 24,
					fontWeight: 500,
					padding: "12px 16px",
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
	},
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
		fontFamily: "Outfit",
		h1: {
			fontSize: 96,
			fontWeight: 600,
		},
		h2: {
			fontSize: 70,
			fontWeight: 500,
		},
		h3: {
			fontSize: 64,
			fontWeight: 400,
		},
		h4: {
			fontSize: 50,
			fontWeight: 600,
		},
		h5: {
			fontSize: 30,
			fontWeight: 600,
		},
		h6: {
			fontSize: 24,
			fontWeight: 600,
		},
		textXl: {
			fontSize: 20,
			fontWeight: 400,
		},
		textLg: {
			fontSize: 18,
			fontWeight: 400,
		},
		textMd: {
			fontSize: 16,
			fontWeight: 400,
		},
		textSm: {
			fontSize: 12,
			fontWeight: 400,
		},
		textXs: {
			fontSize: 10,
			fontWeight: 400,
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
			fontSize: 22,
			lineHeight: 1.5,
			letterSpacing: 0,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			fontWeight: 400,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
			color: "#767676",
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
	} as WPTypographyOptions,
};
export const lightTheme = createTheme({
	...commonPalette,
	palette: {
		mode: "light",
		primary: {
			main: "#000000",
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
