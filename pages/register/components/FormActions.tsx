import { Dispatch, FC, SetStateAction } from "react";
import { Stack, Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

interface Props {
	totalSteps: number;
	stepsCompleted: number;
	goToPrevious: () => void;
	goToNext: () => void;
	handleSubmit: () => void;
	isError: () => boolean;
	setShowErr: Dispatch<SetStateAction<boolean>>;
	loading: boolean;
}

export const FormActions: FC<Props> = ({
	goToNext,
	goToPrevious,
	stepsCompleted,
	totalSteps,
	handleSubmit,
	isError,
	setShowErr,
	loading,
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
			{stepsCompleted === totalSteps ? (
				<LoadingButton
					loading={loading}
					loadingPosition="end"
					endIcon={<Send sx={{ display: loading ? "none" : "inline-block" }} />}
					variant="text"
					onClick={() => (isError() ? setShowErr(true) : handleSubmit())}
				>
					SUBMIT
				</LoadingButton>
			) : (
				<Button onClick={() => (isError() ? setShowErr(true) : goToNext())}>
					<Typography>NEXT</Typography>
				</Button>
			)}
		</Stack>
	);
};
