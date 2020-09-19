import { css } from "@emotion/core";
import React from "react";
import { IDisplayComment } from "../types";
import formatDate from "../utils/formatDate";
import {
  CircleImage,
  ContentTitle,
  Detail,
  Horizontal,
  LighterDetail,
  SmallBold,
} from "./Atomics";

const Comment: React.FC<Partial<IDisplayComment>> = ({
  content,
  author,
  target,
  date,
}) => {
  return (
    <Horizontal
      css={css`
        align-items: top;
        & + & {
          margin-top: 15px;
        }
      `}
    >
      {author?.image && (
        <div
          css={css`
            margin-right: 10px;
          `}
        >
          <CircleImage width={40} height={40} src={author?.image} />
        </div>
      )}
      <div>
        <SmallBold>{author?.name}</SmallBold>
        <ContentTitle>{content}</ContentTitle>
        {target?.name && <Detail>{target.name}</Detail>}
        {date && <LighterDetail>{formatDate(date)}</LighterDetail>}
      </div>
    </Horizontal>
  );
};

export default Comment;
