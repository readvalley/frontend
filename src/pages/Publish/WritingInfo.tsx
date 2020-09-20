import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import {
  PageWrapper,
  GroupTitle,
  Image,
  ContentTitle,
  Dropdown,
  Textarea,
} from "../../components/Atomics";
import BottomBar from "../../components/BottomBar";
import Button from "../../components/Button";
import { IDisplayWriting, Status } from "../../types";

const getWritingInfo = () => ({
  hearted: false,
  title: "왜 고교생은 사회적으로 문제가 되는가?",
  price: 30,
  image: "https://cdn.clien.net/web/api/file/F01/10589114/55662d23e74cca.jpg",
  hearts: 2037,
  _id: "29292193",
  status: Status.PUBLIC,
  purchases: 12,
});

const WritingInfo = () => {
  const [writing, setWriting] = useState<Partial<IDisplayWriting>>();
  useEffect(() => {
    setWriting(getWritingInfo());
  }, []);
  return (
    <>
      <PageWrapper>
        <GroupTitle>작품 상세정보</GroupTitle>
        <Image
          css={css`
            width: 100%;
          `}
          src={writing?.image}
        />
        <ContentTitle
          css={css`
            margin-top: 10px;
          `}
        >
          {writing?.title}
        </ContentTitle>
        <div
          css={css`
            margin-top: 10px;
          `}
        >
          <Dropdown>
            <option>문학</option>
          </Dropdown>
          <Dropdown
            css={css`
              margin-left: 10px;
            `}
          >
            <option>고전</option>
            <option>시</option>
            <option>SF</option>
            <option>정통소설</option>
            <option>로맨스</option>
            <option>판타지</option>
          </Dropdown>
        </div>
        <div
          css={css`
            margin-top: 10px;
          `}
        >
          <Textarea
            css={css`
              width: 100%;
            `}
          />
        </div>
        <Button
          css={css`
            width: 100%;
            margin-top: 10px;
          `}
        >
          저장
        </Button>
      </PageWrapper>
      {BottomBar}
    </>
  );
};

export default WritingInfo;
