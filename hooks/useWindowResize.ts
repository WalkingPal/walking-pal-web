import { useState, useEffect } from "react";

interface Size {
	width: number | undefined;
	height: number | undefined;
	scrollHeight: number | undefined;
}

export function useWindowSize(): Size {
	const [windowSize, setWindowSize] = useState<Size>({
		width: undefined,
		height: undefined,
		scrollHeight: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
				scrollHeight: document.body.scrollHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}
