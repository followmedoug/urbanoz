import React from "react";
import { Container } from "./style";

export const CustomDiv = ({
  children,
  onClick = null,
  flex,
  column,
  justifyCenter,
  justifySpaceBetween,
  justifyEnd,
  justifyStart,
  justifySpaceAround,
  justifySpaceEvenly,
  alignStart,
  alignEnd,
  alignCenter,
  marginTop,
  marginBottom,
  marginSides,
  padding,
  paddingSides,
  paddingLeft,
  halfWidth,
  fullWidth,
  height,
  width,
  input,
  animation,
  duration,
  ...props
}) => (
  <Container
    {...props}
    flex={flex}
    paddingLeft={paddingLeft}
    column={column}
    height={height}
    width={width}
    halfWidth={halfWidth}
    alignStart={alignStart}
    justifyCenter={justifyCenter}
    justifySpaceBetween={justifySpaceBetween}
    justifyEnd={justifyEnd}
    justifySpaceAround={justifySpaceAround}
    justifySpaceEvenly={justifySpaceEvenly}
    alignCenter={alignCenter}
    alignEnd={alignEnd}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginSides={marginSides}
    padding={padding}
    paddingSides={paddingSides}
    justifyStart={justifyStart}
    fullWidth={fullWidth}
    onClick={onClick || null}
    input={input}
    animation={animation}
    duration={duration}
  >
    {children}
  </Container>
);

export default CustomDiv;
