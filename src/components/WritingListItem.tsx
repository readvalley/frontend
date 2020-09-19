import { css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";
import { IDisplayWriting } from "../types";
import { ContentTitle, Detail, Horizontal, Image } from "./Atomics";
import HeartCounter from "./HeartCounter";

const WritingListItem: React.FC<Partial<IDisplayWriting>> = ({
  title,
  hearted,
  hearts,
  image: imageUri,
  series,
  _id,
  ...props
}) => {
  return (
    <>
      <Link
        to={`/reader/${_id}`}
        css={css`
          & + & {
            margin-top: 10px;
          }
          text-decoration: none;
          color: inherit;
          display: inline-block;
        `}
      >
        <Horizontal {...props}>
          <Image src={imageUri} height={80} />
          <div
            css={css`
              margin-left: 10px;
              & * + * {
                margin-top: 5px;
              }
            `}
          >
            <ContentTitle>{title}</ContentTitle>
            <Detail>{series?.title}</Detail>
            {hearts && <HeartCounter hearts={hearts} hearted={hearted} />}
          </div>
        </Horizontal>
      </Link>
    </>
  );
};

export default WritingListItem;
