import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";

export type AnimSet = "sm" | "md" | "default";
type Animation = Record<AnimSet, ParallaxProps>;
export const animations: Record<string, Animation> = {
	mockup: {
		default: { scale: [1.3, 1], startScroll: 0, endScroll: 450 },
		md: {
			scale: [1.3, 1],
			translateX: ["-50%", "0"],
			startScroll: 0,
			endScroll: 450,
		},
		sm: { scale: [1.1, 0.9], startScroll: 0, endScroll: 450 },
	},
	credit: {
		default: {
			opacity: [0.1, 1],
			translateX: ["-30%", "0"],
			startScroll: 100,
			endScroll: 450,
		},
		md: {
			opacity: [0.3, 1],
			scale: [1.3, 1],
			translateX: ["50%", "0"],
			startScroll: 0,
			endScroll: 450,
		},
		sm: {
			scale: [1.4, 1],
			translateY: ["30%", "0"],
			startScroll: 750,
			endScroll: 850,
		},
	},
	screens1: {
		default: {
			opacity: [0.1, 1],
			translateX: ["30%", "0"],
			startScroll: 130,
			endScroll: 530,
		},
		md: {
			scale: [1.2, 1],
			opacity: [0.1, 1],
			translateY: ["30%", "0"],
			startScroll: 650,
			endScroll: 950,
		},
		sm: {
			scale: [1.4, 1],
			translateY: ["30%", "0"],
			startScroll: 1000,
			endScroll: 1250,
		},
	},
	screens2: {
		default: {
			opacity: [0.1, 1],
			translateX: ["-30%", "0"],
			startScroll: 150,
			endScroll: 600,
		},
		md: {
			opacity: [0.1, 1],
			translateX: ["50%", "0"],
			scale: [1.3, 1],
			startScroll: 150,
			endScroll: 550,
		},
		sm: {},
	},
	walker: {
		default: {
			scale: [1.1, 1],
			opacity: [0.2, 1],
			translateY: ["30%", "0"],
			startScroll: 800,
			endScroll: 900,
		},
		md: {
			scale: [1.1, 1],
			opacity: [0.2, 1],
			translateY: ["30%", "0"],
			startScroll: 350,
			endScroll: 650,
		},
		sm: {},
	},
	group: {
		default: {
			scale: [1.1, 1],
			opacity: [0.1, 1],
			translateY: ["30%", "0"],
			startScroll: 800,
			endScroll: 950,
		},
		md: {
			scale: [1.2, 1],
			opacity: [0.1, 1],
			translateY: ["30%", "0"],
			startScroll: 650,
			endScroll: 950,
		},
		sm: {
			scale: [1.3, 1],
			translateY: ["30%", "0"],
			startScroll: 1500,
			endScroll: 1750,
		},
	},
};
