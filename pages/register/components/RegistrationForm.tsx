import { Stack, Typography, FormControl, OutlinedInput, InputLabel, Button } from '@mui/material'
import { FC, useState, Dispatch, SetStateAction } from "react";
import FormActions from './FormActions';
import InputField from './InputField';

const totalSteps = 4

interface User {
    firstName: string
    lastName: string
    email: string
    university: string
}

interface Props {
    stepsCompleted: number
    setStepsCompleted: Dispatch<SetStateAction<number>>
}

const RegistrationForm: FC<Props> = ({stepsCompleted, setStepsCompleted}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [university, setUniversity] = useState('')

    const goToPrevious = () => {
        if(stepsCompleted === 0) return
        setStepsCompleted(stepsCompleted-1)
    }

    const goToNext = () => {
        if(stepsCompleted === totalSteps) return
        setStepsCompleted(stepsCompleted+1)
    }

    const handleSubmit = () => {
        const user: User = {
            firstName,
            lastName,
            email,
            university
        }
        console.log(user)
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
                        type='email'
                        value={email}
                        setValue={setEmail}
                    />}
                    {stepsCompleted === 3 && <InputField
                        label='University'
                        value={university}
                        setValue={setUniversity}
                    />}
                    {stepsCompleted === 4 && <InputField
                        label='Follow us on Instagram'
                        value='@walkingpal.in'
                    />}
                </Stack>
                <FormActions 
                    totalSteps={totalSteps}
                    stepsCompleted={stepsCompleted}
                    goToNext={goToNext}
                    goToPrevious={goToPrevious}
                    handleSubmit={handleSubmit}
                />
            </FormControl>
        </Stack>
    )
}

export default RegistrationForm