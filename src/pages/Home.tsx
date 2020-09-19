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
      & + & {
        margin-left: 10px;
      }
      text-decoration: none;
      color: inherit;
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
            title="0% 의 가능성"
            imageUri="https://rycont.imfast.io/Share/%EC%A7%80%EC%88%98/1588748506721.jpg"
            authorName="COCO N"
            _id="1032"
          />
          <SeriesCard
            title="1% 의 가능성"
            imageUri="https://rycont.imfast.io/Share/%EC%A7%80%EC%88%98/1588748517398.jpg"
            authorName="COCO N"
            _id="1033"
          />
          <SeriesCard
            title="100% 의 가능성"
            imageUri="https://rycont.imfast.io/Share/%EC%A7%80%EC%88%98/1588748506369.jpg"
            authorName="COCO N"
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
