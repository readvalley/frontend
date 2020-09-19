import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { Horizontal, Input } from "./Atomics";

const InputWithName: React.FC<
  React.HTMLAttributes<HTMLInputElement> & {
    name: string;
    className?: string;
  }
> = ({ name, className, ...props }) => {
  return (
    <Horizontal
      className={className}
      css={[
        css`
          align-items: center;
        `,
      ]}
    >
      <Name>{name}</Name>
      <div
        css={css`
          flex: 1;
        `}
      >
        <Input
          css={css`
            width: 100%;
          `}
          {...props}
        />
      </div>
    </Horizontal>
  );
};

const Name = styled.div`
  font-size: 18px;
  opacity: 0.5;
  margin-right: 10px;
`;

export default InputWithName;
