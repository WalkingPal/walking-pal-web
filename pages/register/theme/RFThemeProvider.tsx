import { ThemeProvider } from "@mui/material";
import { FCC } from "types/IReact";
import { registrationFormTheme } from "./theme";



export const RFThemeProvider: FCC = ({children}) => {
    return (
        <ThemeProvider
            theme={ registrationFormTheme }
        >
            {children}
        </ThemeProvider>
    )
}