import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import walker from "../../../assets/png/ceo.png";
import { flexbox } from "@mui/system";
import Ashutosh from "../../../assets/png/team/Ashutosh.png";
import Arpit from "../../../assets/png/team/Arpit.png";
import Astha from "../../../assets/png/team/Astha.png";
import Flevie from "../../../assets/png/team/Flevie.png";
import Misty from "../../../assets/png/team/Misty.png";
import Akhilesh from "../../../assets/png/team/Akhilesh.png";
import Pratham from "../../../assets/png/team/Pratham.png";
import Pallav from "../../../assets/png/team/Pallav.png";
import Asmi from "../../../assets/png/team/Asmi.png";
import Pratikash from "../../../assets/png/team/Pratikash.png";
import Prachi from "../../../assets/png/team/Prachi.png";
import Ravindra from "../../../assets/png/team/Ravindra.png";
import Ronak from "../../../assets/png/team/Ronak.png";

const teamData = {
	vp: [
		{ name: "Junaid Ahmed", dec: "Founter and CEO", bgColor: "#FF5959" },
		{
			name: "Ashutosh Khanduala",
			dec: "VP of Engineering",
			image: Ashutosh,
			bgColor: "#67CBC9",
		},
	],
	members: [
		{
			name: "Flevie Patnaik",
			dec: "Content Producer",
			image: Flevie,
			bgColor: "#FF5959",
		},
		{
			name: "Misty Ghose",
			dec: "Social media growth",
			image: Misty,
			bgColor: "#F6BF51",
		},
		{
			name: "Arpit Anshuman",
			dec: "Non-Tech Contributor",
			image: Arpit,
			bgColor: "#67CBC9",
		},
		{
			name: "Astha Niharika",
			dec: "Web Developer",
			image: Astha,
			bgColor: "#FF5959",
		},
		{
			name: "Akhilesh Nair",
			dec: "Backend Developer",
			image: Akhilesh,
			bgColor: "#F6BF51",
		},
		{
			name: "Pratham Mishra",
			dec: "Frontend Developer",
			image: Pratham,
			bgColor: "#F6BF51",
		},
		{
			name: "Pallav Patra",
			dec: "Frontend Developer",
			image: Pallav,
			bgColor: "#FF5959",
		},
		{
			name: "Asmi Jena",
			dec: "Frontend Developer",
			image: Asmi,
			bgColor: "#F6BF51",
		},
		{
			name: "Pratikash Panda",
			dec: "Web Developer",
			image: Pratikash,
			bgColor: "#67CBC9",
		},
		{
			name: "Prachi Suman",
			dec: "Web Developer",
			image: Prachi,
			bgColor: "#FF5959",
		},
		{
			name: "Ravindra Nag",
			dec: "Frontend Developer",
			image: Ravindra,
			bgColor: "#67CBC9",
		},
		{
			name: "Ronak Mallick",
			dec: "Graphic Designer",
			image: Ronak,
			bgColor: "#67CBC9",
		},
	],
};

export const Team: FC = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#FAFAFA",
				marginTop: { xs: "150px", md: "200px" },
				marginBottom: "50px",
			}}
		>
			<Box
				sx={{
					width: { xs: "100%", md: "80%" },
					margin: "0 auto",
					marginTop: "20px",
					marginBottom: "100px",
					borderRadius: "30px",
				}}
			>
				<Typography variant="h3" textAlign={"center"}>
					Meet the{" "}
					<Typography color={"#FF5959"} fontSize={"3.6rem"} component="span">
						team
					</Typography>
				</Typography>
				<Typography textAlign={"center"} mb={4}>
					Here’s the wizards that changed your boring and lonely walks into a
					fun and interesting one forever.
				</Typography>
				<Box
					sx={{
						display: { xs: "block", md: "flex" },
						gap: "15px",
						marginTop: "20px",
					}}
				>
					{teamData.vp.map((item, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								width: { xs: "100%", md: "50%" },
							}}
						>
							<Box
								sx={{
									backgroundColor: item.bgColor,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "30px",
								}}
							>
								<Image
									src={item.image ? item.image : ""}
									alt={item.image ? `${item.name}` : ""}
									width={350}
									height={300}
								/>
							</Box>
							<Box sx={{ marginTop: "5px" }}>
								<Typography
									variant="h4"
									textAlign={{ xs: "center", md: "left" }}
									fontSize={"1.9rem"}
									fontWeight={"400"}
								>
									{item.name}
								</Typography>
								<Typography textAlign={{ xs: "center", md: "left" }}>
									{item.dec}
								</Typography>
							</Box>
						</Box>
					))}
				</Box>
				<Box
					sx={{
						display: { xs: "block", md: "flex" },
						justifyContent: "space-between",
						marginTop: "20px",
						gap: "15px",
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					{teamData.members.map((item, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: { xs: "100%", sm: "40%", md: "23%" },
								marginTop: "10px",
							}}
						>
							<Box
								sx={{
									backgroundColor: "#67CBC9",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "15px",
								}}
							>
								<Image
									src={item.image ? item.image : ""}
									alt={item.image ? `${item.name}` : ""}
									width={350}
									height={300}
								/>
							</Box>
							<Box sx={{ marginTop: "5px" }}>
								<Typography
									variant="h4"
									textAlign={{ xs: "center", md: "left" }}
									fontSize={"1.9rem"}
									fontWeight={"400"}
									color={"#000000"}
								>
									{item.name}
								</Typography>
								<Typography fontSize={"16px"}>{item.dec}</Typography>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};
