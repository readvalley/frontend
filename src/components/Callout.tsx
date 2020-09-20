import styled from "@emotion/styled";
import React, { useState } from "react";
import { Close } from "css.gg/icons/all";
import { css } from "@emotion/core";

const Callout: React.FC<{ calloudId?: string }> = ({
  children,
  calloudId,
  ...props
}) => {
  const [closed, setClosed] = useState(
    localStorage.getItem(`CALLOUT/${calloudId}`) === "CLOSED"
  );
  const closeCallout = () => {
    localStorage.setItem(`CALLOUT/${calloudId}`, "CLOSED");
    setClosed(true);
  };
  if (closed) return <></>;
  return (
    <Wrapper {...props}>
      {children}
      {calloudId && (
        <Close
          css={css`
            margin-left: auto;
            opacity: 0.4;
            vertical-align: middle;
          `}
          onClick={closeCallout}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 15px;
  background-color: #f6f6f6;
  color: #4d4d4d;
  display: flex;
  font-size: 15px;
  vertical-align: middle;
`;

export default Callout;
