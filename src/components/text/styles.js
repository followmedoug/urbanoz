import styled, { css } from "styled-components";

export const Container = styled.p`
  color: #fff;
  margin-bottom: 15px;
  border: none;
  width: 95%;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  justify-content: 'center';
  font-family: "Montserrat";

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : ""}

  ${({ strokeWitdh }) =>
    strokeWitdh
      ? css`
          -webkit-text-stroke-width: 5px;
        `
      : ""}

  ${({ strokeColor }) =>
    strokeColor
      ? css`
          -webkit-text-stroke: ${strokeColor};
        `
      : ""}

  ${({ strokeFill }) =>
    strokeFill
      ? css`
          -webkit-text-fill-color: ${strokeFill};
        `
      : ""}

  ${({ title, big }) =>
    big
      ? css`
          font-size: 18px;
        `
      : title
      ? css`
          font-size: 80px;
          font-family: "Blacklisted";
        `
      : css`
          font-size: 16px;
        `}

  ${({ bold }) =>
    bold
      ? css`
          font-weight: 700;
        `
      : null}
`;
