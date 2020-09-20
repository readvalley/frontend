import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";

import {
  ContentTitle,
  Detail,
  Horizontal,
  Image,
  Input,
  LighterDetail,
  PageWrapper,
  SubgroupTitle,
} from "../components/Atomics";
import { IDisplaySeries } from "../types";
import Button from "../components/Button";
import HeartCounter from "../components/HeartCounter";
import WritingListItem from "../components/WritingListItem";
import Comment from "../components/Comment";
import { Link } from "react-router-dom";

const getSeriesData = (id: string): IDisplaySeries => {
  return {
    title: "전생엔 흔한 고교생이였던 내가 이번생에도 고교생",
    image: "https://cdn.clien.net/web/api/file/F01/10589109/55661ee1189447.jpg",
    hearts: 8282,
    hearted: false,
    creator: {
      name: "유은혜",
      _id: "2097",
    },
    category: "경제 · 자기계발",
    intro: `이에 따라 창작자의 힘이 상당히 위축되어있습니다. 책의 단가를 정하는 과정에서 출판사와 서점이 갑의 위치에 있기에, 창작물에 정당한 단가를 책정하지 못합니다.`,
    _id: "28237",
    writings: [
      {
        hearted: false,
        title: "왜 고교생은 사회적으로 문제가 되는가?",
        price: 30,
        image:
          "https://cdn.clien.net/web/api/file/F01/10589114/55662d23e74cca.jpg",
        hearts: 2037,
        _id: "29292193",
      },
      {
        hearted: false,
        title: "왜 고교생은 사회적으로 문제가 되는가?",
        price: 30,
        image:
          "https://cdn.clien.net/web/api/file/F01/10589114/55662d23e74cca.jpg",
        hearts: 2037,
        _id: "29292194",
      },
    ],
    comments: [
      {
        date: new Date(),
        content: "혁명이다",
        author: {
          name: "revolutionary",
          image: "http://image.yes24.com/goods/91869001/",
        },
        _id: "D2D2D2",
      },
      {
        date: new Date(),
        content: "혁명이다",
        author: {
          name: "revolutionary",
          image: "http://image.yes24.com/goods/91869001/",
        },
        _id: "D2D2D3",
      },
    ],
    currentReading: 3,
  };
};

const Series: React.FC<{ id: string }> = ({ id }) => {
  const [seriesData, setSeriesData] = useState<IDisplaySeries>();
  useEffect(() => {
    setSeriesData(getSeriesData(id));
  }, [id]);
  if (!seriesData) return <></>;
  return (
    <PageWrapper>
      <Image
        css={css`
          width: 100%;
        `}
        src={seriesData?.image}
      />
      <ContentTitle
        css={css`
          margin-top: 10px;
        `}
      >
        {seriesData.title}
      </ContentTitle>
      <Detail
        css={css`
          margin-top: 10px;
        `}
      >
        {seriesData.creator.name}
      </Detail>
      <Horizontal
        css={css`
          margin: 10px 0px;
          justify-content: space-between;
        `}
      >
        <LighterDetail>{seriesData.category}</LighterDetail>
        <HeartCounter hearted={seriesData.hearted} hearts={seriesData.hearts} />
      </Horizontal>
      {seriesData.currentReading && (
        <Link to={`/reader/${seriesData._id}/${seriesData.currentReading}`}>
          <Button
            colors={{
              background: "#F0EEFF",
              text: "#9B8CFF",
            }}
          >
            이어서 보기
          </Button>
        </Link>
      )}
      <Link to={`/reader/${seriesData._id}/${seriesData.currentReading}`}>
        <Button
          css={css`
            margin-left: 10px;
          `}
          colors={{
            background: "#EEF5FF",
            text: "#8CBAFF",
          }}
        >
          처음부터 보기
        </Button>
      </Link>
      {seriesData.intro && (
        <>
          <SubgroupTitle>소개</SubgroupTitle>
          <Detail
            css={css`
              line-height: 27px;
            `}
          >
            {seriesData.intro}
          </Detail>
        </>
      )}
      <SubgroupTitle>회차</SubgroupTitle>
      {seriesData.writings?.map((d) => (
        <WritingListItem {...d} key={d._id} />
      ))}
      <SubgroupTitle
        css={css`
          margin-bottom: 10px;
        `}
      >
        댓글
      </SubgroupTitle>
      <Horizontal
        css={css`
          margin-bottom: 20px;
        `}
      >
        <Input
          css={css`
            flex: 1;
            border-right-width: 0px;
          `}
        />
        <Button
          css={css`
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
          `}
        >
          등록
        </Button>
      </Horizontal>
      {seriesData.comments?.map((d) => (
        <Comment {...d} />
      ))}
    </PageWrapper>
  );
};

export default Series;
