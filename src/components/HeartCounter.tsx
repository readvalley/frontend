import { css } from "@emotion/core";
import { ReactComponent as Heart } from "../assets/Heart.svg";
import { ReactComponent as FillHeart } from "../assets/FillHeart.svg";
import React from "react";

const HeartCss = css`
  height: 14px;
  width: 14px;
  margin-right: 5px;
  fill: red;
`;

interface IHeartCounterProps {
  hearts: number;
  hearted?: boolean;
}

const HeartCounter: React.FC<IHeartCounterProps> = ({ hearted, hearts }) => {
  return (
    <div
      css={css`
        color: #ff6767;
        display: flex;
        align-items: center;
        font-size: 14px;
      `}
    >
      {hearted ? <FillHeart css={HeartCss} /> : <Heart css={HeartCss} />}
      {hearts}
    </div>
  );
};

export default HeartCounter;
