import styled from "styled-components";
// import background from "../../assets/background1.jpg";

// export const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${background});
//   background-size: 140%;
//   background-color: rgba(0, 0, 0, 0.8);
//   height: 812px;
//   width: 400px;
// `;

export const Form = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    min-height: 48px;
    width: 90%;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #fff;
    border: none;
    border-bottom: 2px solid #e57728;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 8px;
    font-size: 14px;
    line-height: 16px;
    font-family: "Montserrat";
    &::plaholder {
      color: #fff;
    }
  }

  button {
    font-family: "Montserrat";
    color: #fff;
    font-size: 14px;
    background: #e57728;
    height: 56px;
    border: 0;
    border-radius: 8px;
    width: 100%;
    transition: all 0.2 ease;
    &:focus,
    &:hover {
      background-color: #d66411;
      border: none;
    }
    &:active {
      box-shadow: none;
      border: none;
    }
  }
  p {
    justify-content: "start";
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;
