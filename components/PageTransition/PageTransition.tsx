import { FC } from "react";
import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0, x: 0, y: -200 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -100, y: 0 },
};

interface Props {
	children: JSX.Element;
}

export const PageTransition: FC<Props> = ({ children }: Props) => {
	return (
		<motion.main
			variants={variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={{ type: "linear" }}
			className=""
		>
			{children}
		</motion.main>
	);
};
