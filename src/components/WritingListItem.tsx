import { css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";
import { IDisplayWriting, Status } from "../types";
import { ContentTitle, Detail, Horizontal, Image } from "./Atomics";
import HeartCounter from "./HeartCounter";

const WritingListItem: React.FC<Partial<
  IDisplayWriting & { disableLink: boolean }
>> = ({
  title,
  hearted,
  hearts,
  image: imageUri,
  series,
  _id,
  price,
  purchases,
  status,
  disableLink,
  ...props
}) => {
  const content = (
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
        {typeof status === "number" && (
          <Detail>
            {
              {
                [Status.HIDED]: "비",
                [Status.PUBLIC]: "",
              }[status]
            }
            공개
          </Detail>
        )}
        {price && <Detail>{price}RPT</Detail>}
        {purchases && <Detail>{purchases}부 판매</Detail>}
        {price && purchases && <Detail>판매수익 {purchases * price}RPT</Detail>}
        {hearts && <HeartCounter hearts={hearts} hearted={hearted} />}
      </div>
    </Horizontal>
  );
  if (disableLink) return content;
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
        {content}
      </Link>
    </>
  );
};

export default WritingListItem;
