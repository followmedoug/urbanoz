import React from "react";
import { Container } from "./styles";

export default function ContainerMain({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
