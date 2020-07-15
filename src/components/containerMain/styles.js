import styled, { css } from "styled-components";
import background from "../../assets/background1.jpg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  padding: 60px 60px 60px 30px;
  margin: 0;
  transition: all 0.5s ease;
  height: "fit content";
  /* min-width: 950px; */
  background-image: url(${background});
  background-size: 140%;

  @media (max-width: 768px) {
    min-width: 0;
    padding: 20px 16px;

    ${({ isEmpty, minHeight }) =>
      !isEmpty && minHeight && minHeight[1]
        ? css`
            min-height: calc(100% + ${minHeight[1]}px);
          `
        : ""}
  }
`;
