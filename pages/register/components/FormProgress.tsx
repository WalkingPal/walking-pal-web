import { Step, StepLabel, Stepper } from "@mui/material";
import { FC } from "react";
import { ProgressConnector } from "./ProgressConnector";
import { ProgressIcon } from "./ProgressIcon";

interface Props {
	stepsCompleted: number;
	steps: {
		id: number;
		name: string;
	}[];
}

export const FormProgress: FC<Props> = ({ stepsCompleted, steps }) => {
	return (
		<Stepper
			activeStep={stepsCompleted}
			sx={{
				width: "100%",
				maxWidth: 900,
			}}
			connector={<ProgressConnector />}
		>
			{steps.map(step => (
				<Step key={step.name}>
					<StepLabel StepIconComponent={ProgressIcon}></StepLabel>
				</Step>
			))}
		</Stepper>
	);
};
