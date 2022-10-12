import { ISlideIn, SlideIn } from "components/SlideIn";
import React, { FC } from "react";

interface ISlideEach extends ISlideIn {}

export const SlideEach: FC<ISlideEach> = ({ children, ...slideProps }) => {
	return (
		<>
			{React.Children.map(children, (child, i) => {
				return (
					<SlideIn key={`slide-in-${i}`} {...slideProps}>
						{child}
					</SlideIn>
				);
			})}
		</>
	);
};
