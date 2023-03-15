import { ContainerLayout } from "./Container.styles";
import React, { FC } from "react";
import { ContainerProps } from "../../../types/Container";

export const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
  return <ContainerLayout>{children}</ContainerLayout>;
};
