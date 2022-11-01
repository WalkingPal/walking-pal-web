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

const sliders = [
	{
		img: gallery0,
		alt: "",
		// alt: "Two people walking down a sidewalk"
	},
	{
		img: gallery1,
		alt: "",
		// alt: "Low angle view of two people walking on glass floor",
	},
	{
		img: gallery2,
		alt: "",
		//  alt: "Walking down the road"
	},
	{
		img: gallery3,
		alt: "",
		// alt: "A stick man figure that flies clinging to a red heart shape",
	},
	{
		img: gallery4,
		alt: "",
		// alt: "Colorful steps",
	},
	{
		img: gallery5,
		alt: "",
		// alt: "Footstep surrounded by flowers and leaves"
	},
];

export const Hero: FC<IHero> = ({}) => {
	const [loop, setLoop] = useState(false);
	useEffect(() => {
		setLoop(true);
	}, []);

	return (
		<>
			<Box textAlign="center">
				<Typography variant="h3" component="h1">
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
					{sliders.map((slider, index) => (
						<SwiperSlide key={index}>
							<Box sx={{ userSelect: "none" }}>
								<Image
									src={slider.img}
									alt={slider.alt}
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
					))}
				</Swiper>
			</Box>
		</>
	);
};
