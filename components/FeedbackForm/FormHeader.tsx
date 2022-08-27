import { Box, Typography } from "@mui/material";
import { ELcenter } from "assets/png";
import { Image } from "components/Image";
import { FC } from "react";
import styles from "./form.module.scss";

interface IFormHeader {}

export const FormHeader: FC<IFormHeader> = ({}) => {
	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				gap="62px"
			>
				<Image
					className={styles.el}
					src={ELcenter}
					style={{ width: "1294px", height: "655px", marginBottom: "62px" }}
				/>

				<Typography variant="h3">Let us know who you are</Typography>
			</Box>
			<Typography fontSize="18px">
				Drop down your query or message and we will get back to you as soon as
				possible.
			</Typography>
		</>
	);
};
