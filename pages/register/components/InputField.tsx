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
	Link,
} from "@mui/material";
import { ReactNode } from "react";
import { FCC } from "types/IReact";

interface IInputField extends InputBaseProps {
	label: string;
}
export const InputField: FCC<IInputField> = props => {
	return (
		<Stack gap="8px" sx={{ p: "32px", backgroundColor: "white" }}>
			<InputLabel
				required
				sx={{
					fontSize: 30,
					position: "static",
					transform: "none",
					color: "#000",
				}}
			>
				<Typography variant="h6" component="span" fontWeight="medium">
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
							"Other",
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
				<OutlinedInput
					{...props}
					label={undefined}
					sx={{
						fontSize: 24,
						fontWeight: 500,
						fontFamily: "Outfit",
					}}
				/>
			)}
			{props.children}
		</Stack>
	);
};
