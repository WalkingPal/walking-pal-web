import { Button, FormControl, Input, InputLabel, Stack, Typography, OutlinedInput } from "@mui/material";
import { NextPage } from "next";
import RFThemeProvider from "./theme";
import RegistrationForm from "./components/RegistrationForm";

const Register: NextPage = () => {
    return (
        <RFThemeProvider>
            <Stack
                width='100%'
                minHeight='100vh'
                bgcolor='#FF5959'
                padding='32px'
                alignItems='center'
            >
                <Typography
                    variant='h3'
                    textAlign='center'
                >
                    Early User Registration
                </Typography>
                <RegistrationForm />
            </Stack>
        </RFThemeProvider>
    )
}

export { Register }