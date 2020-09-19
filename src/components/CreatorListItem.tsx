import { css } from "@emotion/core";
import React from "react";
import { IDisplayCreator } from "../types";
import { Horizontal, CircleImage, ContentTitle, Detail } from "./Atomics";

const CreatorListItem: React.FC<IDisplayCreator> = ({
  name,
  image: imageUri,
  category,
  follower,
  ...props
}) => {
  return (
    <Horizontal {...props}>
      <CircleImage src={imageUri} width={80} height={80} />
      <div
        css={css`
          margin-left: 10px;
          & * + * {
            margin-top: 5px;
          }
        `}
      >
        <ContentTitle>{name}</ContentTitle>
        <Detail>주제: {category}</Detail>
        <Detail>팔로워: {follower}</Detail>
      </div>
    </Horizontal>
  );
};

export default CreatorListItem;
