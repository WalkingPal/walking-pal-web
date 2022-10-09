import { motion } from "framer-motion";
import { FCC } from "types/IReact";

const variants = {
	hidden: { opacity: 0, x: 0, y: -200 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -100, y: 0 },
};

export const PageTransition: FCC = ({ children }) => {
	return (
		<motion.main
			variants={variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={{ type: "linear" }}
		>
			{children}
		</motion.main>
	);
};
