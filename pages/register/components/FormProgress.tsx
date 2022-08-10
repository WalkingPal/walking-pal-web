import { Step, StepLabel, Stepper } from "@mui/material";
import { FC, Dispatch, SetStateAction } from "react";

interface Props {
    stepsCompleted: number
    steps: {
        id: number
        name: string
    }[]
}

export const FormProgress: FC<Props> = ({stepsCompleted, steps}) => {
    return (
        <Stepper
            activeStep={stepsCompleted}
            sx={{
                width: '100%',
                maxWidth: 900
            }}
        >
            { steps.map(step => (
                <Step
                    key={step.name}
                >
                    <StepLabel

                    ></StepLabel>
                </Step>
            )) }
        </Stepper>
    )
}