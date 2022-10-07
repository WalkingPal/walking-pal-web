import { SlideIn } from "components/SlideIn";
import { ISlideIn } from "components/SlideIn/SlideIn";
import { FC, ReactNode } from "react";

interface ISlideEach extends Omit<ISlideIn, "children"> {
	children: ReactNode;
}

export const SlideEach: FC<ISlideEach> = ({ children, ...slideProps }) => {
	return (
		<>
			{children.map((compo) => {
				// eslint-disable-next-line react/jsx-key
				return <SlideIn {...slideProps}> {compo} </SlideIn>;
			})}
		</>
	);
};
