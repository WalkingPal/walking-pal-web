import { Stack, Box, FormHelperText } from "@mui/material";
import {
	checkValidity,
	FieldName,
	Fields,
	fields,
} from "pages/register/components/formValidation";
import {
	FC,
	useState,
	Dispatch,
	SetStateAction,
	useRef,
	ChangeEvent,
	useEffect,
} from "react";
import { FormActions } from "./FormActions";
import { InputField } from "./InputField";

const totalSteps = 4;

interface User {
	firstName: string;
	lastName: string;
	email: string;
	university: string;
}

interface Props {
	stepsCompleted: number;
	setStepsCompleted: Dispatch<SetStateAction<number>>;
	setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

export const RegistrationForm: FC<Props> = ({
	stepsCompleted,
	setStepsCompleted,
	setIsSubmitted,
}) => {
	const [formData, setFormData] = useState<Fields>({
		firstName: "",
		lastName: "",
		email: "",
		university: "",
	});

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const goToPrevious = async () => {
		if (stepsCompleted === 0) return;

		const [key, value] = Object.entries(formData)[stepsCompleted - 1];
		errorMessage.current = await checkValidity(value, key as FieldName);

		setStepsCompleted(stepsCompleted - 1);
	};

	const goToNext = async () => {
		if (stepsCompleted === totalSteps) return;

		if (stepsCompleted < totalSteps - 1) {
			const [key, value] = Object.entries(formData)[stepsCompleted + 1];
			errorMessage.current = await checkValidity(value, key as FieldName);
		}

		setStepsCompleted(stepsCompleted + 1);
	};

	const handleSubmit = () => {
		const user: User = formData;
		console.log(user);
		setIsSubmitted(true);
	};

	const boxRef = useRef<HTMLDivElement>(null);
	const translateX = useRef(0);
	useEffect(() => {
		translateX.current = boxRef.current?.offsetWidth!;
	}, []);

	const [showErr, setShowErr] = useState(false);
	const errorMessage = useRef("");
	const onFieldChange = async (e: ChangeEvent<HTMLInputElement>) => {
		setShowErr(false);
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
		errorMessage.current = await checkValidity(
			e.target.value,
			e.target.name as FieldName,
		);
	};

	const isError = () => {
		if (!Object.values(formData)[stepsCompleted].length) {
			errorMessage.current = "This is a Required Field.";
		}
		return (
			!Object.values(formData)[stepsCompleted].length ||
			!!errorMessage.current.length
		);
	};

	return (
		<>
			<Stack
				maxWidth={700}
				width="100%"
				bgcolor="white"
				boxShadow="10px 20px 50px rgba(0,0,0,0.25)"
				borderRadius="16px"
				overflow="hidden"
			>
				<div
					style={{
						display: "flex",
						transform: `translateX(-${translateX.current * stepsCompleted}px)`,
						transition: "1s",
					}}
				>
					{(Object.entries(fields) as Array<[FieldName, string]>).map(
						([fieldName, label], i) => {
							return (
								<Box ref={boxRef} key={"field-" + i} sx={{ minWidth: "100%" }}>
									<InputField
										label={label}
										name={fieldName}
										value={formData[fieldName]}
										onChange={onFieldChange}
									>
										<FormHelperText error>
											{showErr && errorMessage.current}&nbsp;
										</FormHelperText>
									</InputField>
								</Box>
							);
						},
					)}
					<Box sx={{ minWidth: "100%" }}>
						<InputField
							label="Follow us on Instagram"
							value="@walkingpal.in"
							disabled
							sx={{
								"& .Mui-disabled": {
									color: "#000",
									WebkitTextFillColor: "#000",
								},
							}}
						/>
					</Box>
				</div>
				<FormActions
					totalSteps={totalSteps}
					stepsCompleted={stepsCompleted}
					goToNext={goToNext}
					goToPrevious={goToPrevious}
					handleSubmit={handleSubmit}
					isError={isError}
					setShowErr={setShowErr}
				/>
			</Stack>
		</>
	);
};
