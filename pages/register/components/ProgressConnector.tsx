import {
	Box,
	StepConnector,
	styled,
	StepConnectorProps,
	Theme,
} from "@mui/material";
import { FC } from "react";
import { StyledComponent } from "@emotion/styled";
import { MUIStyledCommonProps } from "@mui/system";

export const ProgressConnector: StyledComponent<
	StepConnectorProps & MUIStyledCommonProps<Theme>,
	{},
	{}
> = styled(StepConnector)({
	backgroundColor: "#FFFFFF",
	height: 2,
});
