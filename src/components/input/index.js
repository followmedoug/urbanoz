import React from "react";
import { Container } from "./style";

const Input = ({
  name,
  type,
  label,
  value,
  handleChange = (a) => a,
  ...props
}) => (
  <Container {...props}>
    <input
      name={name}
      onChange={(event) => handleChange(event)}
      placeholder={label}
      value={value}
      type={type}
    />
    <label>{label}</label>
  </Container>
);

export default Input;
