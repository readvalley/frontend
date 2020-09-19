import { css } from "@emotion/core";
import React from "react";
import { IDisplayWriting } from "../types";
import { ContentTitle, Detail, Horizontal, Image } from "./Atomics";
import HeartCounter from "./HeartCounter";

const WritingListItem: React.FC<IDisplayWriting> = ({
  title,
  hearted,
  hearts,
  image: imageUri,
  series,
  ...props
}) => {
  return (
    <>
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
          <Detail>{series.title}</Detail>
          <HeartCounter hearts={hearts} hearted={hearted} />
        </div>
      </Horizontal>
    </>
  );
};

export default WritingListItem;
