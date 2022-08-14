import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const commonPalette: ThemeOptions = {
	shape: {
		borderRadius: 10,
	},
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
		MuiSnackbar: {
			styleOverrides: {
				root: {
					alignItems: "center",
				},
			},
		},
	},
	typography: {
		htmlFontSize: 16,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		fontFamily:
			"'Outfit',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
		h1: {
			fontSize: "clamp(5.537109375rem, 2.7120234375rem + 8.92875vw, 8.4375rem)",
			fontWeight: 500,
			lineHeight: 1.1142857142857143,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h2: {
			fontSize: "clamp(3.9375rem, 1.92855rem + 3.5714vw, 6rem)",
			fontWeight: 400,
			lineHeight: 1.2222222222222223,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h3: {
			fontSize: "clamp(3.240234375rem, 1.5870359375rem + 1.78575vw, 4.9375rem)",
			fontWeight: 400,
			lineHeight: 1.2222222222222223,
			letterSpacing: 0.2,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h4: {
			fontSize: "clamp(2.625rem, 1.2857rem + 1.4286vw, 3.6875rem)",
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: 0.2,
			fontFamily:
				"'Outfit',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h5: {
			fontSize: "1.9375rem",
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: 0.1,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		h6: {
			fontSize: "1.25rem",
			fontWeight: 500,
			lineHeight: 1.5,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: 400,
			lineHeight: 1.3333333333333333,
			letterSpacing: 0,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		subtitle2: {
			fontSize: "1rem",
			fontWeight: 500,
			lineHeight: 1.57,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		body1: {
			color: "#484848",
			fontSize: "1.125rem",
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: 0,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		body2: {
			color: "#484848",
			fontSize: "1rem",
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: 0,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		button: {
			textTransform: "initial",
			fontSize: "1.125rem",
			fontWeight: 400,
			lineHeight: 1.75,
			letterSpacing: 0,
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		caption: {
			display: "inline-block",
			fontSize: "0.75rem",
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: 0,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		overline: {
			textTransform: "uppercase",
			fontSize: "0.75rem",
			fontWeight: 400,
			lineHeight: 2.66,
			fontFamily:
				"'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
		allVariants: {
			scrollMarginTop: "calc(var(--header-height) + 32px)",
		},
	},
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
		error: { main: "#d32f2f" },
	},
});
