import styled from "styled-components";

export const Container = styled.button`
  min-height: 56px;
  min-width: 315px;
  background-color: #e57728;
  font-size: 14px;
  font-family: "Montserrat";
  cursor: pointer;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  transition: all 0.2 ease;

  &:hover {
    background-color: #d66411;
    border: none;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
    border: none;
  }
`;
