import { ButtonLayout } from "./Button.styles";
import React, { FC } from "react";
import { ButtonProps } from "../../../types/Button";

export const Button: FC<ButtonProps> = ({ text, onClickHandler }) => {
  return <ButtonLayout onClick={onClickHandler}>{text}</ButtonLayout>;
};
