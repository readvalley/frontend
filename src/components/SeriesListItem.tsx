import { css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";
import { IDisplaySeries } from "../types";
import {
  ContentTitle,
  Detail,
  Horizontal,
  Image,
  LighterDetail,
} from "./Atomics";
import HeartCounter from "./HeartCounter";

const SeriesListItem: React.FC<
  Partial<IDisplaySeries> & { disableLink?: boolean }
> = ({
  title,
  category,
  creator,
  hearts,
  hearted,
  image: imageUri,
  _id,
  disableLink,
  purchases,
  ...props
}) => {
  const Content = (
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
        {purchases && <Detail>{purchases}부 판매</Detail>}
        {creator?.name && <Detail>{creator.name}</Detail>}
        <LighterDetail>{category}</LighterDetail>
        {hearts && <HeartCounter hearts={hearts} hearted={hearted} />}
      </div>
    </Horizontal>
  );
  if (disableLink) return Content;
  return (
    <>
      <Link
        to={`/series/${_id}`}
        css={css`
          & + & {
            margin-top: 10px;
          }
          text-decoration: none;
          color: inherit;
          display: inline-block;
        `}
      >
        {Content}
      </Link>
    </>
  );
};

export default SeriesListItem;
