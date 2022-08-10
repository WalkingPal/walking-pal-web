import { createTheme, Theme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CSSProperties } from "react";

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        textXl: true
        textLg: true
        textMd: true
        textSm: true
        textXs: true
    }
}

interface WPTypographyOptions extends TypographyOptions {
    textXl: CSSProperties
    textLg: CSSProperties
    textMd: CSSProperties
    textSm: CSSProperties
    textXs: CSSProperties
}

export const registrationFormTheme: Theme = createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    position: 'static',
                    transform: 'none',
                    color: '#000000'
                },
                asterisk: {
                    color: '#FF5959'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: ({ownerState}) => ({
                    ...(ownerState.variant === 'text' && {
                        '&:hover': {
                            backgroundColor: 'initial'
                        }
                    }),
                    ...(ownerState.disabled && {
                        color: 'gray'
                    })
                })
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '10px'
                },
                input: {
                    fontSize: 24,
                    fontWeight: 500,
                    padding: '12px 16px'
                }
            }
        },
        MuiStep: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    border: 'none'
                }
            }
        },
        MuiStepLabel: {
            styleOverrides: {
                iconContainer: {
                    padding: 0
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                icon: {
                    alignItems: 'center'
                }
            }
        }
    },
    typography: {
        fontFamily: 'Outfit',
        fontSize: 16,
        fontWeightBold: 600,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        h1: {
            fontSize: 72,
            fontWeight: 400
        },
        h2: {
            fontSize: 60,
            fontWeight: 400
        },
        h3: {
            fontSize: 48,
            fontWeight: 600
        },
        h4: {
            fontSize: 36,
            fontWeight: 600
        },
        h5: {
            fontSize: 30,
            fontWeight: 600
        },
        h6: {
            fontSize: 24,
            fontWeight: 600
        },
        textXl: {
            fontSize: 20,
            fontWeight: 400
        },
        textLg: {
            fontSize: 18,
            fontWeight: 400
        },
        textMd: {
            fontSize: 16,
            fontWeight: 400
        },
        textSm: {
            fontSize: 12,
            fontWeight: 400
        },
        textXs: {
            fontSize: 10,
            fontWeight: 400
        },
    } as WPTypographyOptions,
    palette: {
        primary: {
            main: '#000000'
        }
    }
})