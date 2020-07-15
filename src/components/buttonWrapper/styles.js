import styled, { css } from "styled-components";

import { Container as Button } from "../button/style";

export const Container = styled.div`
  ${Button} {
    margin-left: 33px;

    ${({ smallMargin }) =>
      smallMargin
        ? css`
            margin-left: 16px;
          `
        : css`
            margin-left: 33px;
          `}
    :first-child {
      margin-left: 0;
    }
  }

  ${({ center }) =>
    center
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: flex-end;
        `}
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ""}
`;
