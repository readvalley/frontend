import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import {
  Chip,
  CircleImage,
  ContentTitle,
  Detail,
  Divider,
  GroupTitle,
  Horizontal,
  HorizontalScroller,
  Image,
  LighterDetail,
  PageWrapper,
} from "../components/Atomics";
import HeartCounter from "../components/HeartCounter";
import BottomBar from "../components/BottomBar";

const SeriesListItem: React.FC<IDisplaySeries> = ({
  title,
  category,
  creator,
  hearts,
  hearted,
  image: imageUri,
}) => {
  return (
    <>
      <Horizontal>
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

interface IDisplayCreator {
  image: string;
  name: string;
  category: string;
  follower: number;
  _id: string;
}

interface IDisplaySeries {
  category: string;
  hearts: number;
  hearted: boolean;
  creator: Partial<IDisplayCreator>;
  title: string;
  image: string;
  _id: string;
}

const CreatorListItem: React.FC<IDisplayCreator> = ({
  name,
  image: imageUri,
  category,
  follower,
}) => {
  return (
    <Horizontal>
      <CircleImage src={imageUri} width={80} height={80} />
      <div
        css={css`
          margin-left: 10px;
          & * + * {
            margin-top: 5px;
          }
        `}
      >
        <ContentTitle>{name}</ContentTitle>
        <Detail>주제: {category}</Detail>
        <Detail>팔로워: {follower}</Detail>
      </div>
    </Horizontal>
  );
};

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

  const WEEKLY_CREATOR: IDisplayCreator[] = [
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
