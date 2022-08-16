import { Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { footerLinks } from "./footer-links";
import styles from "./footer.module.scss";
import { LinkContainer } from "./LinkContainer";

export const Footer: FC = ({}) => {
	return (
    <Stack
      gap='24px'
      padding='120px 24px 100px'
      bgcolor='#000000'
      alignItems='center'
      justifyContent='center'
    >
      <Stack
        gap={{
          xs: '24px',
          sm: '48px',
          md: '72px'
        }}
        direction='row'
        flexWrap='wrap'
        justifyContent='space-between'
        width='100%'
        maxWidth={1030}
      >
        { footerLinks.map(link => (
          <LinkContainer 
            key={link.title}
            footerLink={link}
          />
        )) }
      </Stack>
      <Divider 
        flexItem
        color="grey"
      />
      <Stack
        direction={{
          xs: 'column',
          md: 'row'
        }}
        justifyContent='space-between'
        width='100%'
        padding={{
          xs: '24px',
          md: '90px'
        }}
      >
        <Typography
          color='white'
          textAlign={{
            xs: 'center',
            md: 'right'
          }}
          flexGrow={1}
        >
          Our
          <Typography component='span' color='#FF5959'>{' '}mission{' '}</Typography>
          is to change the people cover their
          <Typography component='span' color='#FF5959'>{' '}last-mile{' '}</Typography>
          by making walking more fun and the
          <Typography component='span' color='#FF5959'>{' '}preferred{' '}</Typography>
          way to commute.
        </Typography>
      </Stack>
    </Stack>
  )
};
