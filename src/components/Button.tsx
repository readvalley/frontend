import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { ACTIVE_BACKGROUND, ACTIVE_RED } from "../constants";

const Button: React.FC<{ color?: { background: string; text: string } }> = ({
  children,
  color,
  ...props
}) => {
  return (
    <Wrapper
      {...props}
      css={
        color &&
        css`
          background-color: ${color.background};
          color: ${color.text};
        `
      }
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${ACTIVE_BACKGROUND};
  color: ${ACTIVE_RED};
  padding: 10px 15px;
  display: inline-block;
  border-radius: 6px;
`;

export default Button;
