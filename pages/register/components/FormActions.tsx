import { FC, useState } from "react";
import { Stack, Button, Typography, useFormControl } from '@mui/material'

interface Props {
    stepsCompleted: number
    goToPrevious: () => void
    goToNext: () => void
}

const FormActions: FC<Props> = ({goToNext, goToPrevious, stepsCompleted}) => {
    const formState = useFormControl()

    return (
        <Stack
            direction='row'
            justifyContent='space-between'
            padding='10px 16px'
            bgcolor='#F6BF51'
        >
            <Button
                disabled={ stepsCompleted === 0 }
                onClick={goToPrevious}
            >
                <Typography
                    textTransform='uppercase'
                >
                    previous
                </Typography>
            </Button>
            <Button
                disabled={ !formState?.filled || stepsCompleted === 3 }
                onClick={goToNext}
            >
                <Typography
                    textTransform='uppercase'
                >
                    next
                </Typography>
            </Button>
        </Stack>
    )
}

export default FormActions