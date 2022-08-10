import { Stack, Typography, FormControl, OutlinedInput, InputLabel, Button } from '@mui/material'
import { FC, useState } from "react";
import FormActions from './FormActions';
import InputField from './InputField';

const RegistrationForm: FC = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [university, setUniversity] = useState('')
    const [stepsCompleted, setStepsCompleted] = useState(0)

    const goToPrevious = () => {
        if(stepsCompleted === 0) return
        setStepsCompleted(stepsCompleted-1)
    }

    const goToNext = () => {
        if(stepsCompleted === 3) return
        setStepsCompleted(stepsCompleted+1)
    }

    return (
        <Stack
            maxWidth={700}
            width='100%'
            bgcolor='white'
            boxShadow='10px 20px 50px rgba(0,0,0,0.25)'
            borderRadius='16px'
            overflow='hidden'
        >
            <FormControl>
                <Stack
                    sx={{
                        padding: '32px',
                        backgroundColor:'white'
                    }}
                >
                    {stepsCompleted === 0 && <InputField
                        label='First Name'
                        value={firstName}
                        setValue={setFirstName}
                    />}
                    {stepsCompleted === 1 && <InputField
                        label='Last Name'
                        value={lastName}
                        setValue={setLastName}
                    />}
                    {stepsCompleted === 2 && <InputField
                        label='Email'
                        value={email}
                        setValue={setEmail}
                    />}
                    {stepsCompleted === 3 && <InputField
                        label='University'
                        value={university}
                        setValue={setUniversity}
                    />}
                </Stack>
                <FormActions 
                    stepsCompleted={stepsCompleted}
                    goToNext={goToNext}
                    goToPrevious={goToPrevious}
                />
            </FormControl>
        </Stack>
    )
}

export default RegistrationForm