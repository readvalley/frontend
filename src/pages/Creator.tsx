import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import {
  CircleImage,
  ContentTitle,
  Detail,
  Horizontal,
  Input,
  LighterDetail,
  PageWrapper,
  SubgroupTitle,
} from "../components/Atomics";
import Button from "../components/Button";
import Comment from "../components/Comment";
import SeriesListItem from "../components/SeriesListItem";
import { IDisplayCreator } from "../types";

const getCreatorData = (id: string): IDisplayCreator => {
  return {
    name: "유은혜",
    image:
      "https://thewiki.ewr1.vultrobjects.com/data/4170706c655061792e6a7067.jpg",
    follower: 90,
    category: "문학",
    _id: "2097",
    isFollowing: false,
    serieses: [
      {
        category: "문학 · 판타지",
        hearts: 1273,
        hearted: false,
        title: "틀딱오타쿠가 빠질 수 없지",
        image: "https://pbs.twimg.com/media/EiQb3zYVoAAwhue?format=jpg",
        _id: "2473",
      },
      {
        category: "문학 · 판타지",
        hearts: 1273,
        hearted: false,
        title: "틀딱오타쿠가 빠질 수 없지",
        image: "https://pbs.twimg.com/media/EiQb3zYVoAAwhue?format=jpg",
        _id: "2472",
      },
    ],
    comments: [
      {
        author: {
          name: "정은경",
        },
        target: {
          id: "2097",
          type: "creator",
        },
        date: new Date(),
        content: "구름OS에 필적할만합니다",
        _id: "3843",
      },
    ],
    intro:
      "- 이에 따라 창작자의 힘이 상당히 위축되어있습니다. 책의 단가를 정하는 과정에서 출판사와 서점이 갑의 위치에 있기에, 창작물에 정당한 단가를 책정하지 못합니다.",
  };
};

const Creator: React.FC<{ id: string }> = ({ id }) => {
  const [creatorData, setCreatorData] = useState<IDisplayCreator>();
  useEffect(() => {
    setCreatorData(() => getCreatorData(id));
  }, [id]);
  if (!creatorData) return <></>;
  return (
    <PageWrapper>
      <Horizontal>
        {creatorData.image && (
          <CircleImage
            width={120}
            height={120}
            src={creatorData.image}
            css={css`
              margin-right: 20px;
            `}
          />
        )}

        <div
          css={css`
            & * + * {
              margin-top: 10px !important;
            }
          `}
        >
          <ContentTitle>{creatorData.name}</ContentTitle>
          <LighterDetail>주제 : {creatorData.category}</LighterDetail>
          <LighterDetail>팔로워 : {creatorData.follower}</LighterDetail>
          <Button
            colors={{
              background: "#F0EEFF",
              text: "#9B8CFF",
            }}
          >
            {creatorData.isFollowing ? "팔로잉" : "팔로우"}
          </Button>
        </div>
      </Horizontal>
      <Button
        css={css`
          width: 100%;
          margin-top: 10px;
        `}
      >
        후원하기
      </Button>
      <SubgroupTitle>소개</SubgroupTitle>
      <Detail
        css={css`
          line-height: 27px;
        `}
      >
        {creatorData.intro}
      </Detail>
      <SubgroupTitle>작품</SubgroupTitle>
      {creatorData.serieses?.map((d) => (
        <SeriesListItem {...d} key={d._id} />
      ))}
      <SubgroupTitle>댓글</SubgroupTitle>
      <Horizontal
        css={css`
          margin-bottom: 20px;
        `}
      >
        <Input
          css={css`
            flex: 1;
            border-right-width: 0;
          `}
        />
        <Button
          css={css`
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          `}
        >
          등록
        </Button>
      </Horizontal>
      {creatorData.comments?.map((d) => (
        <Comment {...d} />
      ))}
    </PageWrapper>
  );
};

export default Creator;
