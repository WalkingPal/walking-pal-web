import { SlideIn } from "components/SlideIn";
import { FC, ReactNode } from "react";

interface ISlideEach extends ISlideIn {
	children: ReactNode;
}

export const SlideEach: FC<ISlideEach> = ({ children, ...slideProps }) => {
	return (
		<>
			{children.map((compo: any) => {
				// eslint-disable-next-line react/jsx-key
				return <SlideIn {...slideProps}> {compo} </SlideIn>;
			})}
		</>
	);
};
