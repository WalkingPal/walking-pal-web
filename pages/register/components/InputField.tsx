import {
	Stack,
	Typography,
	InputLabel,
	OutlinedInput,
	InputBaseProps,
} from "@mui/material";
import { FCC } from "types/IReact";

interface IInputField extends InputBaseProps {
	label: string;
}
export const InputField: FCC<IInputField> = props => {
	return (
		<Stack gap="8px" sx={{ p: "32px", backgroundColor: "white" }}>
			<InputLabel required sx={{ fontSize: 30 }}>
				<Typography variant="h5" component="span" fontWeight="medium">
					{props.label}
				</Typography>
			</InputLabel>
			<OutlinedInput {...props} label={undefined} />
			{props.children}
		</Stack>
	);
};
