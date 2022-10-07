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
import { ReactNode, useEffect, useRef } from "react";
import { FCC } from "types/IReact";

interface IInputField extends InputBaseProps {
	enableFocus: boolean;
	label: string;
}
export const InputField: FCC<IInputField> = ({
	enableFocus,
	label,
	...inputProps
}) => {
	const inputRef = useRef<HTMLElement>(null);
	useEffect(() => {
		if (!inputRef.current) return;

		if (enableFocus) {
			inputRef.current.getElementsByTagName("input")[0].focus();
		}
	}, [inputRef]);
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
					{label}
				</Typography>
			</InputLabel>
			{label === "University" ? (
				<FormControl fullWidth>
					<Select
						{...inputProps}
						onChange={
							inputProps.onChange as (
								event: SelectChangeEvent<unknown>,
								child: ReactNode,
							) => void
						}
						label={undefined}
						sx={{
							...inputProps.sx,
							lineHeight: "unset",
							fontSize: 24,
							fontWeight: 500,
							fontFamily: "Outfit",
						}}
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
										fontSize: 24,
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
					{...inputProps}
					ref={inputRef}
					label={undefined}
					sx={{
						fontSize: 24,
						fontWeight: 500,
						fontFamily: "Outfit",
					}}
				/>
			)}
			{inputProps.children}
		</Stack>
	);
};
