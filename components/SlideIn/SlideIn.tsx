import { Slide } from "@mui/material";
import { FC, ReactElement } from "react";
import { useInView } from "react-intersection-observer";

interface ISlideIn {
	/**
	 * Margin around the root.  Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
	 */
	rootMargin?: string;
	/**
	 * Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points.
	 */
	threshold?: number | number[];
	direction?: "right" | "left" | "up" | "down";
	children: ReactElement;
}

export const SlideIn: FC<ISlideIn> = ({
	rootMargin = "0px",
	threshold = [0.4, 0.6],
	direction = "right",
	children,
}) => {
	const { ref, inView } = useInView({
		rootMargin,
		threshold,
		fallbackInView: true,
	});

	return (
		<div ref={ref}>
			<Slide in={inView} direction={direction}>
				{children}
			</Slide>
		</div>
	);
};
