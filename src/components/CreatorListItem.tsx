import { css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";
import { IDisplayCreator } from "../types";
import { Horizontal, CircleImage, ContentTitle, Detail } from "./Atomics";

const CreatorListItem: React.FC<Partial<IDisplayCreator>> = ({
  name,
  image: imageUri,
  category,
  follower,
  _id,
  ...props
}) => {
  return (
    <Link
      to={`/creator/${_id}`}
      css={css`
        text-decoration: none;
        color: inherit;
        display: inline-block;
      `}
    >
      <Horizontal {...props}>
        {imageUri && (
          <CircleImage
            src={imageUri}
            width={80}
            height={80}
            css={css`
              margin-right: 10px;
            `}
          />
        )}
        <div
          css={css`
            & * + * {
              margin-top: 5px;
            }
          `}
        >
          <ContentTitle>{name}</ContentTitle>
          {category && <Detail>주제: {category}</Detail>}
          {follower && <Detail>팔로워: {follower}</Detail>}
        </div>
      </Horizontal>
    </Link>
  );
};

export default CreatorListItem;
