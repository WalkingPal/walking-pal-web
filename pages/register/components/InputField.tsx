import { Stack, Typography, InputLabel, OutlinedInput, useFormControl, FormControlState } from "@mui/material"
import { FC, useEffect } from "react"
import { Dispatch, SetStateAction, ChangeEvent } from 'react'

interface Field {
    label: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const InputField: FC<Field> = ({label, value, setValue}) => {
    const formState = useFormControl()

    useEffect(() => {
        console.log(formState?.filled)
    }, [formState])

    return (
        <Stack
            gap='8px'
        >
            <InputLabel
                    required
                    sx={{
                        fontSize: 30
                    }}
                >
                    <Typography
                        variant='h5'
                        component='span'
                        fontWeight='medium'
                    >
                        {label}
                    </Typography>
                </InputLabel>
                <OutlinedInput
                    value={value}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                        setValue(e.target.value)
                    }}
                />
        </Stack>
    )
}

export default InputField