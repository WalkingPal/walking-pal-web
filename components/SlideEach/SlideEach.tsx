import { SlideIn } from "components/SlideIn";
import { ISlideIn } from "components/SlideIn/SlideIn";
import React, { FC, ReactNode } from "react";

interface ISlideEach extends ISlideIn {
	children: ReactNode;
}

export const SlideEach: FC<ISlideEach> = ({ children, ...slideProps }) => {
	return (
		<>
			{React.Children.map(children, (child, i) => {
				return (
					<SlideIn key={`slide-in=${i}`} {...slideProps}>
						{child}
					</SlideIn>
				);
			})}
		</>
	);
};
