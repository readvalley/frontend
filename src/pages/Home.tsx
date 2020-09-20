import { css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";
import {
  GroupTitle,
  Image,
  ContentTitle,
  Detail,
  HorizontalScroller,
  PageWrapper,
} from "../components/Atomics";
import BottomBar from "../components/BottomBar";

interface ISeriesCardProps {
  title: string;
  imageUri: string;
  authorName: string;
  _id: string;
}

const FixedWidthImage: React.FC<{ src: string }> = ({ src }) => (
  <Image
    src={src}
    height={140}
    css={css`
      margin-bottom: 10px;
    `}
  />
);

const SeriesCard: React.FC<ISeriesCardProps> = ({
  title,
  imageUri,
  authorName,
  _id,
}) => (
  <Link
    to={`/series/${_id}`}
    css={css`
      text-decoration: none;
      color: inherit;

      section {
        width: 140px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
      }
    `}
  >
    <section>
      <FixedWidthImage src={imageUri} />
      <ContentTitle>{title}</ContentTitle>
      <Detail>{authorName}</Detail>
    </section>
  </Link>
);

interface IWritingCard {
  title: string;
  imageUri: string;
}

const WritingCard: React.FC<IWritingCard> = ({ title, imageUri }) => {
  return (
    <section>
      <FixedWidthImage src={imageUri} />
      <ContentTitle>{title}</ContentTitle>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <PageWrapper>
        <GroupTitle>읽고있는 작품</GroupTitle>
        <HorizontalScroller>
          <SeriesCard
            title="일론 머스크"
            imageUri="https://images.unsplash.com/photo-1551946650-60a22105bcb0?auto=format&fit=crop&w=1600&q=80"
            authorName="박정한"
            _id="1032"
          />
          <SeriesCard
            title="프론트엔드 연대기"
            imageUri="https://images.unsplash.com/photo-1506438689880-92e5d6b50ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
            authorName="COCO N"
            _id="1033"
          />
          <SeriesCard
            title="블록체인, 그리고 미래"
            imageUri="https://images.unsplash.com/photo-1579709576324-6d40cd467f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3578&q=80"
            authorName="한우영"
            _id="1034"
          />
        </HorizontalScroller>
        <GroupTitle>0%의 가능성</GroupTitle>
        <HorizontalScroller>
          <WritingCard
            imageUri="https://rycont.imfast.io/Share/%EC%A7%80%EC%88%98/1588748516202-2.jpg"
            title="1부 : 포션제조"
          />
        </HorizontalScroller>
        <GroupTitle>나의 방에는 작은 기린이 산다</GroupTitle>
        <HorizontalScroller>
          <WritingCard
            imageUri="https://rycont.imfast.io/Share/%EC%A7%80%EC%88%98/1588748517398.jpg"
            title="127화 : 동물원에 가다"
          />
        </HorizontalScroller>
      </PageWrapper>
      {BottomBar}
    </>
  );
};

export default Home;
