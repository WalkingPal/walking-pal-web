import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
	display: "block",
	width: "2rem",
	height: "2rem",
	backgroundColor: "#FF5959",
	borderRadius: "50%",
};

const LoadingContainer = {
	width: "10rem",
	height: "5rem",
	display: "flex",
	justifyContent: "space-around",
};

const ContainerVariants = {
	initial: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const DotVariants = {
	initial: {
		y: "0%",
	},
	animate: {
		y: "100%",
	},
};

const DotTransition = {
	duration: 0.5,
	yoyo: Infinity,
	ease: "easeInOut",
};

export default function DotWaveLoader() {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
			}}
		>
			<motion.div
				style={LoadingContainer}
				variants={ContainerVariants}
				initial="initial"
				animate="animate"
			>
				<motion.span
					style={LoadingDot}
					variants={DotVariants}
					transition={DotTransition}
				/>
				<motion.span
					style={LoadingDot}
					variants={DotVariants}
					transition={DotTransition}
				/>
				<motion.span
					style={LoadingDot}
					variants={DotVariants}
					transition={DotTransition}
				/>
			</motion.div>
		</div>
	);
}
