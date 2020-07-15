import React from "react";
import { Container } from "./styles";

export const Text = ({
  text,
  big,
  bold,
  justifyStart,
  strokeWidth,
  strokeColor,
  strokeFill,
  color,
  title,
  ...props
}) => (
  <Container
    {...props}
    color={color}
    strokeWidth={strokeWidth}
    strokeColor={strokeColor}
    strokeFill={strokeFill}
    title={title}
    big={big}
    bold={bold}
    justifyStart={justifyStart}
  >
    {text}
  </Container>
);

export default Text;
