import { Step, StepLabel, Stepper } from "@mui/material";
import { fields } from "pages/register/components/formValidation";
import { FC } from "react";
import { ProgressConnector } from "./ProgressConnector";
import { ProgressIcon } from "./ProgressIcon";

interface IFormProgress {
	stepsCompleted: number;
}

export const FormProgress: FC<IFormProgress> = ({ stepsCompleted }) => {
	const steps = Object.keys(fields);

	return (
		<Stepper
			activeStep={stepsCompleted}
			sx={{ width: "100%", maxWidth: 900 }}
			connector={<ProgressConnector />}
		>
			{steps.map(step => (
				<Step key={step}>
					<StepLabel StepIconComponent={ProgressIcon}></StepLabel>
				</Step>
			))}
		</Stepper>
	);
};
