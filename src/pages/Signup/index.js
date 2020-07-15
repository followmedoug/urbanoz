import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/input";
import Button from "../../components/button";
import Text from "../../components/text";
import CustomDiv from "../../components/customDiv";
import ButtonWrapper from "../../components/buttonWrapper";
import ContainerMain from "../../components/containerMain";
import { Form } from "../Login/style";

export default function Login() {
  return (
    <ContainerMain column>
      <Text
        title
        bold
        text="Urbanoz"
        color="#e57728"
        strokeColor="2px rgba(0, 0, 0, 0.8)"
        style={{ fontSize: 35 }}
      />
      <CustomDiv column alignCenter justifyCenter justifySpaceBetween>
        <Text bold text="Nome" justifyStart />
        <Input />
        <Text bold text="Sobrenome" />
        <Input />
        <Text bold text="Email" />
        <Input />
        <Text bold text="Senha" />
        <Input />
        <Text bold text="Digite a senha novamente" />
        <Input />
        <ButtonWrapper>
          <Button />
          <Button />
        </ButtonWrapper>
      </CustomDiv>
      <Text text="Já possui uma conta ? Faça login" />
    </ContainerMain>
  );
}
