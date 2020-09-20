import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import {
  Chip,
  Divider,
  GroupTitle,
  Horizontal,
  PageWrapper,
} from "../components/Atomics";
import BottomBar from "../components/BottomBar";
import { IDisplayCreator, IDisplaySeries } from "../types";
import SeriesListItem from "../components/SeriesListItem";
import CreatorListItem from "../components/CreatorListItem";

const ListWithIndex: React.FC<{
  data: any[];
  render: (data: any) => JSX.Element;
}> = ({ data, render }) => {
  return (
    <div>
      {data.map((e, i) => (
        <Horizontal
          key={e._id}
          css={css`
            & + & {
              margin-top: 10px;
            }
          `}
        >
          <Rank>{i + 1}</Rank>
          <div>{render(e)}</div>
        </Horizontal>
      ))}
    </div>
  );
};

const Rank = styled.div`
  margin-right: 20px;
  height: 80px;
  line-height: 80px;
  color: #4d4d4d;
  font-weight: 700;
`;

const Discover = () => {
  const WEEKLY_SERIES: IDisplaySeries[] = [
    {
      category: "문학 · 판타지",
      hearts: 1273,
      hearted: false,
      creator: {
        name: "잼일",
      },
      title: "틀딱오타쿠가 빠질 수 없지",
      image: "https://pbs.twimg.com/media/EiQb3zYVoAAwhue?format=jpg",
      _id: "2473",
    },
    {
      category: "문학 · 판타지",
      hearts: 1273,
      hearted: false,
      creator: {
        name: "잼일",
      },
      title: "틀딱오타쿠가 빠질 수 없지",
      image: "https://pbs.twimg.com/media/EiQb3zYVoAAwhue?format=jpg",
      _id: "2472",
    },
  ];

  const WEEKLY_CREATOR: Partial<IDisplayCreator>[] = [
    {
      image: "https://pbs.twimg.com/media/EiQSUj8UwAIPlrs?format=jpg",
      name: "산악회장",
      category: "문학 판타지",
      follower: 348,
      _id: "34732985734",
    },
    {
      image: "https://pbs.twimg.com/media/EiQSUj8UwAIPlrs?format=jpg",
      name: "산악회장 딸",
      category: "문학 고전",
      follower: 348,
      _id: "3473298534",
    },
  ];

  return (
    <>
      <PageWrapper>
        <GroupTitle>주간 인기 작품</GroupTitle>
        <ListWithIndex
          data={WEEKLY_SERIES}
          render={(e) => <SeriesListItem {...e} />}
        />
        <Divider />
        <GroupTitle>주간 인기 작가</GroupTitle>
        <ListWithIndex
          data={WEEKLY_CREATOR}
          render={(e) => <CreatorListItem {...e} />}
        />
        <Divider />
        <GroupTitle>인기 검색 키워드</GroupTitle>
        <Chip>코로나19</Chip>
        <Chip>여왕님이 사라진 다음날</Chip>
      </PageWrapper>
      {BottomBar}
    </>
  );
};

export default Discover;
