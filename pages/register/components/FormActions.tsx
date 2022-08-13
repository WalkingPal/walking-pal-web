import { Dispatch, FC, SetStateAction } from "react";
import { Stack, Button, Typography } from "@mui/material";

interface Props {
	totalSteps: number;
	stepsCompleted: number;
	goToPrevious: () => void;
	goToNext: () => void;
	handleSubmit: () => void;
	isError: () => boolean;
	setShowErr: Dispatch<SetStateAction<boolean>>;
}

export const FormActions: FC<Props> = ({
	goToNext,
	goToPrevious,
	stepsCompleted,
	totalSteps,
	handleSubmit,
	isError,
	setShowErr,
}) => {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			padding="10px 16px"
			bgcolor="#F6BF51"
		>
			<Button disabled={stepsCompleted === 0} onClick={goToPrevious}>
				<Typography textTransform="uppercase">previous</Typography>
			</Button>
			<Button
				onClick={() => {
					if (stepsCompleted === totalSteps) handleSubmit();
					else if (isError()) {
						setShowErr(true);
					} else {
						goToNext();
					}
				}}
			>
				<Typography textTransform="uppercase">
					{stepsCompleted === totalSteps ? "submit" : "next"}
				</Typography>
			</Button>
		</Stack>
	);
};
