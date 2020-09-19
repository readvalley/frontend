import { css } from "@emotion/core";
import React from "react";
import { IDisplaySeries } from "../types";
import {
  ContentTitle,
  Detail,
  Horizontal,
  Image,
  LighterDetail,
} from "./Atomics";
import HeartCounter from "./HeartCounter";

const SeriesListItem: React.FC<IDisplaySeries> = ({
  title,
  category,
  creator,
  hearts,
  hearted,
  image: imageUri,
  _id,
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
          <Detail>{creator.name}</Detail>
          <LighterDetail>{category}</LighterDetail>
          <HeartCounter hearts={hearts} hearted={hearted} />
        </div>
      </Horizontal>
    </>
  );
};

export default SeriesListItem;
