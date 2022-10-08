import { Box, Typography } from "@mui/material";
import {
	gallery0,
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
} from "assets/png";
import { Accent } from "components/Accent";
import { Image } from "components/Image";
import { Autoplay } from "swiper";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	const [loop, setLoop] = useState(false);
	useEffect(() => {
		setLoop(true);
	}, []);

	return (
		<>
			<Box pt={7} textAlign="center">
				<Typography variant="h3">
					Love in every
					<br />
					<Accent>#Step</Accent>
				</Typography>
			</Box>
			<Box py={7} width="100vw">
				<Swiper
					loop={loop}
					breakpoints={{
						100: { slidesPerView: 2 },
						1050: { slidesPerView: 3 },
						1500: { slidesPerView: 4 },
						1700: { slidesPerView: 5 },
					}}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					modules={[Autoplay]}
					centeredSlides={true}
					spaceBetween={30}
					initialSlide={3}
				>
					{[gallery0, gallery4, gallery1, gallery2, gallery3, gallery5].map(
						(img, index) => (
							<SwiperSlide key={index}>
								<Box sx={{ userSelect: "none" }}>
									<Image
										src={img}
										alt={`Hero Slider Image ${index + 1}`}
										wrapstyle={{
											height: "100%",
											aspectRatio: "1",
											display: "block",
											"& *": {
												height: "100% !important",
											},
										}}
									/>
								</Box>
							</SwiperSlide>
						),
					)}
				</Swiper>
			</Box>
		</>
	);
};
