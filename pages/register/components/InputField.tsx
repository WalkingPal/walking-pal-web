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
	TextField,
	Button,
	Dialog,
} from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
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

	const [otherUniversity, setOtherUniversity] = useState("OTHER");
	const [dialogActive, setDialogActive] = useState(false);
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
							zIndex: 0,
						}}
					>
						{[
							"VSSUT",
							"VIMSAR",
							"IIM Sambalpur",
							"Sambalpur University",
							"SUIIT",
							otherUniversity,
						].map((univ, i) => {
							if (univ === otherUniversity) {
								return (
									<MenuItem
										value={"OTHER"}
										key={"univ-" + i}
										sx={{
											color: "#767676",
											fontSize: 24,
											fontWeight: 500,
											fontFamily: "Outfit",
										}}
										onClick={() => setDialogActive(true)}
									>
										{otherUniversity}
									</MenuItem>
								);
							}

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

			<Dialog
				open={dialogActive}
				sx={{
					overflow: "visible",
					width: "100vw",
					margin: "auto",
					backdropFilter: "blur(5px)",
				}}
			>
				<Stack
					gap="8px"
					sx={{ width: "600px", p: "32px", backgroundColor: "white" }}
				>
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
							Enter your University name
						</Typography>
					</InputLabel>
					<FormControl fullWidth>
						<TextField
							onChange={e => {
								setOtherUniversity(e.target.value.toUpperCase());
								console.log(otherUniversity);
							}}
							value={otherUniversity}
							sx={{
								input: {
									lineHeight: "unset",
									fontSize: 24,
									fontWeight: 500,
									fontFamily: "Outfit",
									color: "#767676",
								},
							}}
							placeholder="Enter your university name"
						/>
					</FormControl>
				</Stack>
				<Stack
					direction="row"
					justifyContent="space-between"
					padding="10px 16px"
					bgcolor="#F6BF51"
				>
					<Button
						onClick={() => {
							setOtherUniversity("OTHER");
							setDialogActive(false);
						}}
					>
						CANCEL
					</Button>

					<Button
						sx={{ color: "black" }}
						onClick={() => {
							setDialogActive(false);
						}}
					>
						DONE
					</Button>
				</Stack>
			</Dialog>
		</Stack>
	);
};
