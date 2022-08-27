import { Alert, AlertColor, Slide, Snackbar } from "@mui/material";
import { FC, SyntheticEvent } from "react";

interface IPopup {
	message: string;
	open: boolean;
	onClose: (event?: SyntheticEvent | Event, reason?: string) => void;
	severity: AlertColor;
}

export const Popup: FC<IPopup> = ({ message, open, onClose, severity }) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={4000}
			onClose={onClose}
			TransitionComponent={props => <Slide {...props} direction="up" />}
		>
			<Alert
				onClose={onClose}
				severity={severity}
				elevation={6}
				variant="filled"
			>
				{message}
			</Alert>
		</Snackbar>
	);
};
