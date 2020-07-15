import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/input";
import Button from "../../components/button";
import Text from "../../components/text";
import CustomDiv from "../../components/customDiv";
import ContainerMain from "../../components/containerMain";

import { Form, Container } from "./style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerMain>
      <CustomDiv alignCenter justifyCenter flex marginBottom={100}>
        <Text
          title
          bold
          text="Urbanoz"
          color="#e57728"
          strokeColor="2px rgba(0, 0, 0, 0.8)"
        />
      </CustomDiv>
      <CustomDiv column alignCenter justifyCenter justifySpaceBetween>
        <Input
          style={{ marginBottom: 30, width: "40%" }}
          type="text"
          label="Email"
          name="loginEmail"
        />
        <Input
          style={{ marginBottom: 30, width: "40%" }}
          type="password"
          label="Senha"
          name="loginPassword"
        />
        <Button label="Entrar" />
      </CustomDiv>
      <Link to="/signup">
        <Text text={`Ainda não possui uma conta ? Cadastre-se`} />
      </Link>
    </ContainerMain>
  );
}
