import { Slide } from "@mui/material";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

interface ISlideIn {
	rootMargin?: string;
	threshold?: number;
	children: ReactElement;
}

export const SlideIn: FC<ISlideIn> = ({
	rootMargin = "0px",
	threshold = 1.0,
	children,
}) => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const callbackFunction = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: rootMargin,
			threshold: threshold,
		};
		const observer = new IntersectionObserver(callbackFunction, options);
		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, [containerRef, rootMargin, threshold]);

	return (
		<div ref={containerRef}>
			<Slide in={isVisible} direction="right">
				{children}
			</Slide>
		</div>
	);
};
