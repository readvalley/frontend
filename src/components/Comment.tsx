import React from "react";
import { IDisplayComment } from "../types";
import formatDate from "../utils/formatDate";
import { ContentTitle, Detail, LighterDetail } from "./Atomics";

const Comment: React.FC<IDisplayComment> = ({
  content,
  author,
  target,
  date,
}) => {
  return (
    <div>
      <ContentTitle>{content}</ContentTitle>
      <Detail>{target.name}</Detail>
      <LighterDetail>{formatDate(date)}</LighterDetail>
    </div>
  );
};

export default Comment;
