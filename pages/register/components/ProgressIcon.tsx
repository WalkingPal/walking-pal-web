import { Box, styled, Theme } from "@mui/material";
import { StyledComponent } from "@emotion/styled";
import { MUIStyledCommonProps } from "@mui/system";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";


interface Props {
    active: boolean
    completed: boolean
}

export const ProgressIcon: FC<Props> = ({ active, completed }) => {
    if(active) return (
        <Box
            sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '2px solid #FFFFFF',
                backgroundColor: '#F6BF51'
            }}
        ></Box>
    )

    return completed ? <Box
        sx={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: '#A6C753'
        }}
    ></Box> : <Box
        sx={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: '#D9D9D9'
        }}
    ></Box>
}