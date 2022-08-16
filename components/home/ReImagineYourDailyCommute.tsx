import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import Community from "./reimagine/Community";
import { CommuteCard } from "./reimagine/CommuteCard";

export interface ICommuteCard {
  id: number
  text: string
  highlight: string
  img: string
  bgcolor: string
  textColor: string
}

const commuteCards: ICommuteCard[] = [
  {
    id: 0,
    text: 'For',
    highlight: 'shopping',
    img: '/images/wp_shopping.png',
    bgcolor: '#8DD8D7',
    textColor: '#67CBC9'
  },
  {
    id: 1,
    text: 'For',
    highlight: 'work',
    img: '/images/wp_promotion.png',
    bgcolor: '#FFE3E3',
    textColor: '#FFACAC'
  },
  {
    id: 2,
    text: 'For',
    highlight: 'traveling',
    img: '/images/wp_bagpack.png',
    bgcolor: '#F8CF7D',
    textColor: '#F6BF51'
  },
  {
    id: 3,
    text: 'Or just a',
    highlight: 'walk!',
    img: '/images/wp_footsteps.png',
    bgcolor: '#FF8282',
    textColor: '#FF5959'
  },
]

export const ReImagineYourDailyCommute: FC = () => {
  return (
    <Stack
      padding='160px 24px 54px'
      bgcolor='#FFFFFF'
      gap='120px'
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
      <Grid
        container
        spacing='16px'
        justifyContent='space-between'
      >
        { commuteCards.map(cc => (
          <Grid
            key={cc.id}
            item
            xs={6}
            md={3}
            // maxWidth={256}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <CommuteCard
              cc={cc}
            />
          </Grid>
        )) }
      </Grid>
      <Community />
    </Stack>
  )
}