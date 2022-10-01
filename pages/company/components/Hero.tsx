import { Box, Typography } from "@mui/material";
import { company1, company2, company3, company4, company5 } from "assets/png";
import { Accent } from "components/Accent";
import { Image } from "components/Image";
import { Autoplay } from "swiper";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "../company.module.scss";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	return (
		<>
			<Box pt={7} textAlign="center">
				<Typography variant="h3" mx={1} maxWidth="800px">
					Love in every
				</Typography>
				<Typography variant="h3" mx={1} maxWidth="800px">
					<Accent>#Step</Accent>
				</Typography>
			</Box>
			<Box py={7} width="100%">
				<Swiper
					breakpoints={{
						100: {
							slidesPerView: 1,
						},
						750: { slidesPerView: 2 },
						1050: {
							slidesPerView: 3,
						},
						1500: {
							slidesPerView: 4,
						},
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					modules={[Autoplay]}
					centeredSlides={true}
				>
					{[company4, company1, company2, company3, company5].map(
						(img, index) => (
							<SwiperSlide key={index}>
								<Box width="100%" display="flex" justifyContent="center">
									<Image src={img} alt={`Hero Slider Image ${index + 1}`} />
								</Box>
							</SwiperSlide>
						),
					)}
				</Swiper>
			</Box>
		</>
	);
};
