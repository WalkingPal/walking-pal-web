import { Stack, Typography } from "@mui/material";
import { FC } from "react";

export const ReImagineYourDailyCommute: FC = () => {
  return (
    <Stack
      padding='160px 24px 54px'
      bgcolor='#FFFFFF'
    >
      <Typography
        variant='h3'
        textAlign='center'
      >
        Reimagine your daily
        <Typography
          component='p'
          variant='h3'
          color='#FF5959'
        >
          {' '}commute
        </Typography>
      </Typography>
    </Stack>
  )
}