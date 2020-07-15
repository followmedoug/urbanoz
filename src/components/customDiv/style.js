import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;

  ${({ animation, duration = "0.2s" }) =>
    (animation, duration)
      ? css`
          animation: ${duration} ${keyframes`${animation}`};
        `
      : ""}

  ${({ input }) =>
    input
      ? css`
          position: relative;

          span {
            position: absolute;
            bottom: -9px;
            left: 0px;
            font-size: 10px;
            color: [#fff];
          }
        `
      : ""}

    ${({ flex }) =>
      typeof flex === "number"
        ? css`
            flex: ${flex};
          `
        : flex
        ? css`
            flex: 1;
          `
        : ""}

  ${({ column }) =>
    column
      ? css`
          flex-direction: column;
        `
      : ""};

  ${({ justifyStart }) =>
    justifyStart
      ? css`
          justify-content: flex-start;
        `
      : ""}

  ${({ marginTop }) =>
    typeof marginTop === "number"
      ? css`
          margin-top: ${marginTop}px;
        `
      : marginTop
      ? css`
          margin-top: 25px;
        `
      : ""}

  ${({ marginBottom }) =>
    typeof marginBottom === "number"
      ? css`
          margin-bottom: ${marginBottom}px;
        `
      : ""};

  ${({ marginSides }) =>
    typeof marginSides === "number"
      ? css`
          margin-left: ${marginSides}px;
          margin-right: ${marginSides}px;
        `
      : marginSides
      ? css`
          margin-left: 8px;
          margin-right: 8px;
        `
      : ""}

  ${({ padding }) =>
    typeof padding === "number"
      ? css`
          padding: ${padding}px;
        `
      : padding
      ? css`
          padding: 55px;
        `
      : ""}

  ${({ paddingSides }) =>
    typeof paddingSides === "number"
      ? css`
          padding-left: ${paddingSides}px;
          padding-right: ${paddingSides}px;
        `
      : paddingSides
      ? css`
          padding-left: 55px;
          padding-right: 55px;
        `
      : ""}

  ${({ paddingLeft }) =>
    typeof paddingSides === "number"
      ? css`
          padding-left: ${paddingLeft}px;
        `
      : paddingLeft
      ? css`
          padding-left: 55px;
        `
      : ""}

  ${({
    justifyCenter,
    justifySpaceBetween,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceEvenly,
  }) =>
    justifyCenter
      ? css`
          justify-content: center;
        `
      : justifySpaceBetween
      ? css`
          justify-content: space-between;
        `
      : justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : justifySpaceAround
      ? css`
          justify-content: space-around;
        `
      : justifySpaceEvenly
      ? css`
          justify-content: space-evenly;
        `
      : justifyStart
      ? css`
          justify-content: flex-start;
        `
      : ""};

  ${({ alignStart, alignCenter, alignEnd }) =>
    alignStart
      ? css`
          align-items: flex-start;
        `
      : alignCenter
      ? css`
          align-items: center;
        `
      : alignEnd
      ? css`
          align-items: flex-end;
        `
      : ""};

  ${({ fullWidth, halfWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : halfWidth
      ? css`
          width: 50%;
        `
      : ""}; 

  ${({ onClick }) =>
    onClick
      ? css`
          cursor: pointer;
        `
      : ""}

    ${({ height }) =>
      height
        ? css`
            height: ${height};
          `
        : ""}
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ""}
      
  @media (max-width: 768px) {
    ${({ desktopOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : ""}

    ${({ marginBottom }) =>
      marginBottom
        ? css`
            margin-bottom: 17px;
          `
        : ""};

    ${({ marginSides }) =>
      marginSides && typeof marginSides !== "number"
        ? css`
            margin-left: 5px;
            margin-right: 5px;
          `
        : ""}

    ${({ padding }) =>
      typeof padding === "number"
        ? css`
            padding: ${padding}px;
          `
        : padding
        ? css`
            padding: 0;
          `
        : ""}

    ${({ paddingSides }) =>
      paddingSides && typeof paddingSides !== "number"
        ? css`
            padding-left: 16px;
            padding-right: 16px;
          `
        : ""}
  }
`;
