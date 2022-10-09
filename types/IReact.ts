import { FC, PropsWithChildren } from "react";

/**
 * Type for React functional components with `children?` prop
 */
export type FCC<P = {}> = FC<PropsWithChildren<P>>;
