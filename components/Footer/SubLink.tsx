import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface Props {
  link: {
    name: string
    href: string
  }
}

export const SubLink: FC<Props> = ({link}) => {
  return (
    <Link
      href={link.href}
      passHref
    >
      <Typography
        variant='textMd'
        color='white'
      >
        {link.name}
      </Typography>
    </Link>
  )
}