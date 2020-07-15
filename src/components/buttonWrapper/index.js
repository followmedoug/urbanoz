import React from "react";

import { Container } from "./styles";

const ButtonWrapper = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default ButtonWrapper;
