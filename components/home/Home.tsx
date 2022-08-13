import { Stack } from "@mui/material";
import { Footer } from "components/Footer";
import { FC } from "react";
import { ReImagineYourDailyCommute } from "./ReImagineYourDailyCommute";

export const Home: FC = () => {
  return (
    <Stack
      minHeight='100vh'
      width='100%'
    >
      <ReImagineYourDailyCommute />
      <Footer />
    </Stack>
  )
}