import { Typography, Box } from "@mui/material"
import Image from "next/image"
import { FC } from 'react'

// image
import btnArrow from "../../../assets/png/walkless.png"

const jobs = [
  {jobTitle: "Graphic Designer", status: "open positions"},
  {jobTitle: "React Native Developer", status: "open positions"},
  {jobTitle: "Back-end Developer (Express.js/Node.js)", status: "open positions"}
]

export const Career: FC = () => {
  return (
    <Box 
      sx={{padding: "20px", marginTop: {xs: "20px", md: "60px"}}}
      >
      <Box 
        sx={{
          textAlign: "center", 
          maxWidth: {xs: "100%", md:"46%"}, 
          margin: "0 Auto"}}
          >
        <Typography 
          sx={{
            fontSize: {xs: "1.5rem", md: "3rem"}, 
            fontWeight: "400", 
            fontStyle: "normal", 
            lineHeight: "74px"}} 
            variant="h2"
            >
              Career Opportunities
            </Typography>
        <Typography 
          variant="p" 
          sx={{
            marginTop: "25px",
            color: "#484848"
          }}
            >
              We are always looking for great and passionate like you to join us in our journey. If you want 
          to join our team please feel free to contact us for the open position below.
        </Typography>
      </Box>
        <Box 
          sx={{ 
            maxWidth: {xs: "100%", md: "81%"}, 
            margin: "0 Auto",
            marginTop: "40px"}}>
            {jobs.map((item, index) => (
              <Box 
                sx={{
                  padding: "40px", 
                  marginTop: "10px", 
                  backgroundColor: "#FAFAFA", 
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "space-between"
                }}
                key={index}
                  >
                <Box>
                  <Typography 
                    variant="h3"
                    sx={{
                      fontSize: {xs: "1.4rem", md: "1.9rem"},
                      lineHeight: "42px"
                    }}
                    >
                      {item.jobTitle}
                    </Typography>
                  <Typography 
                    variant="p"
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      lineHeight: "24px",
                      color: "#484848"
                    }}
                    >
                      {item.status}
                    </Typography>
                </Box>
                <Box
                  sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                >
                  <Image src={btnArrow} alt="button arrow" />
                </Box>
              </Box>
            ))}
        </Box>
    </Box>
  )
}
