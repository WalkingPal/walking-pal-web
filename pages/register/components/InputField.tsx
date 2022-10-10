import {
	Stack,
	Typography,
	InputLabel,
	OutlinedInput,
	InputBaseProps,
	Select,
	SelectChangeEvent,
	MenuItem,
	TextField,
	Button,
	Dialog,
} from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FCC } from "types/IReact";
import styles from "../register.module.scss";
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

	const OTHER = "Other";
	const [otherUniversity, setOtherUniversity] = useState(OTHER);
	const [dialogActive, setDialogActive] = useState(false);
	const isOther = otherUniversity === OTHER;
	return (
		<Stack gap={1} sx={{ p: 3, backgroundColor: "#fff" }}>
			<InputLabel required sx={{ fontSize: 30, color: "#000" }}>
				<Typography variant="h6" component="span" fontWeight="medium">
					{label}
				</Typography>
			</InputLabel>
			{label === "University" ? (
				<Select
					{...inputProps}
					onChange={inputProps.onChange as any}
					label={undefined}
					className={styles.inputText}
					sx={{ ...inputProps.sx, zIndex: 0 }}
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
									value={OTHER}
									key={"otheruniv-" + otherUniversity}
									className={styles.inputText}
									onClick={() => setDialogActive(true)}
									sx={{
										"&::after": {
											content: !isOther ? '"Edit University name"' : '""',
											position: "absolute",
											right: 10,
											fontSize: "1rem",
										},
									}}
								>
									{otherUniversity}
								</MenuItem>
							);
						}

						return (
							<MenuItem
								value={univ}
								key={"univ-" + i}
								className={styles.inputText}
							>
								{univ}
							</MenuItem>
						);
					})}
				</Select>
			) : (
				<OutlinedInput
					{...inputProps}
					ref={inputRef}
					label={undefined}
					className={styles.inputText}
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
				<Stack gap={1} sx={{ width: 600, p: 3, bgcolor: "white" }}>
					<InputLabel
						required
						sx={{ fontSize: 30, transform: "none", color: "#000" }}
					>
						<Typography variant="h6" component="span" fontWeight="medium">
							Enter your University name
						</Typography>
					</InputLabel>
					<TextField
						onChange={e => {
							const newVal = e.target.value.toUpperCase().trim();
							setOtherUniversity(() => (newVal === "" ? OTHER : newVal));
						}}
						value={isOther ? "" : otherUniversity}
						className={styles.inputText}
						placeholder="Enter your University name"
					/>
				</Stack>
				<Stack
					direction="row"
					justifyContent="space-between"
					padding="10px 16px"
					bgcolor="#F6BF51"
				>
					<Button onClick={() => setDialogActive(false)}>CANCEL</Button>
					<Button onClick={() => setDialogActive(false)}>DONE</Button>
				</Stack>
			</Dialog>
		</Stack>
	);
};
