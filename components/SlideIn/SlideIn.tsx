import { Slide, SlideProps } from "@mui/material";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export interface ISlideIn extends Omit<SlideProps, "children"> {
	/**
	 * Margin around the root.  Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
	 */
	rootMargin?: string;
	/**
	 * Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points.
	 */
	threshold?: number | number[];
	children: ReactNode;
}

export const SlideIn: FC<ISlideIn> = ({
	rootMargin = "-50px",
	threshold = [0.4, 0.6],
	children,
	direction = "up",
	...slideProps
}) => {
	const { ref, inView } = useInView({
		rootMargin,
		threshold,
		fallbackInView: true,
	});

	const [dirn, setDirn] = useState(direction);
	const root = useRef<HTMLDivElement>(null);
	function getNewDirn() {
		if (!root.current) return dirn;

		const { y } = root.current.getBoundingClientRect();
		if (y < 0) return "down";
		else return "up";
	}
	useEffect(() => {
		if (["left", "right"].includes(direction)) return;
		if (!inView) {
			setDirn(getNewDirn());
		}
	}, [inView]);

	return (
		<div ref={root} id="slideInRoot">
			<div ref={ref} id="slideInReference">
				<Slide
					in={inView}
					{...slideProps}
					timeout={slideProps.timeout || 500}
					direction={dirn}
				>
					<div>{children}</div>
				</Slide>
			</div>
		</div>
	);
};
