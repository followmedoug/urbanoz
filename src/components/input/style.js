import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 0 1 "40%";
  flex-direction: column;
  position: relative;
  padding-top: 0px;
  font-family: "Montserrat";

  input {
    border: 0;
    border-bottom: 2px solid #e57728;
    outline: none;
    width: 100%;
    font-size: 16px;
    transition: all 0.3s ease-out;
    height: 48px;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 8px;
    padding: 13px 16px 13px 16px;
    color: #fff;
  }

  label {
    font-size: 16px;
    color: #fff;
    margin-left: 16px;
  }

  input:focus {
    border-bottom: 2px solid #e57728;
  }

  input::placeholder {
    color: transparent;
  }

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    font-weight: 700;
  }

  input:required:invalid + label {
    color: red;
  }
  input:focus:required:invalid {
    border-bottom: 2px solid red;
  }
  input:required:invalid + label:before {
    content: "*";
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: -20px;
    color: #fff;
    margin-left: 0;
  }
`;
