import { Button, FormControl, Input, InputLabel, Stack, Typography, OutlinedInput } from "@mui/material";
import { NextPage } from "next";
import RFThemeProvider from "./theme";
import RegistrationForm from "./components/RegistrationForm";
import { useState } from 'react'
import { FormProgress } from "./components/FormProgress";

const steps = [
    {
        id: 1,
        name: 'firstName'
    },
    {
        id: 2,
        name: 'lastName'
    },
    {
        id: 3,
        name: 'email'
    },
    {
        id: 4,
        name: 'university'
    },
    {
        id: 5,
        name: 'submit'
    },
]

const Register: NextPage = () => {
    const [stepsCompleted, setStepsCompleted] = useState(0)

    return (
        <RFThemeProvider>
            <Stack
                width='100%'
                minHeight='100vh'
                bgcolor='#FF5959'
                padding='32px'
                justifyContent='center'
                alignItems='center'
                gap='80px'

            >
                <Typography
                    variant='h3'
                    textAlign='center'
                >
                    Early User Registration
                </Typography>
                <RegistrationForm 
                    stepsCompleted={stepsCompleted}
                    setStepsCompleted={setStepsCompleted}
                />
                <FormProgress 
                    stepsCompleted={stepsCompleted}
                    steps={steps}
                />
            </Stack>
        </RFThemeProvider>
    )
}

export { Register }