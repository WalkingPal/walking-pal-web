import {
	Stack,
	Typography,
	InputLabel,
	OutlinedInput,
	InputBaseProps,
	FormControl,
	Select,
	SelectChangeEvent,
	MenuItem,
} from "@mui/material";
import { ReactNode } from "react";
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
			{props.label === "University" ? (
				<FormControl fullWidth>
					<Select
						{...props}
						onChange={
							props.onChange as (
								event: SelectChangeEvent<unknown>,
								child: ReactNode,
							) => void
						}
						label={undefined}
						sx={{ ...props.sx, lineHeight: "unset" }}
					>
						{[
							"VSSUT",
							"VIMSAR",
							"IIM Sambalpur",
							"Sambalpur University",
							"SUIIT",
						].map((univ, i) => {
							return (
								<MenuItem
									value={univ}
									key={"univ-" + i}
									sx={{
										color: "#767676",
										fontSize: "24px",
										fontWeight: 500,
										fontFamily: "Outfit",
									}}
								>
									{univ}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			) : (
				<OutlinedInput {...props} label={undefined} />
			)}
			{props.children}
		</Stack>
	);
};
