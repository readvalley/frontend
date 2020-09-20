import { css } from "@emotion/core";
import React from "react";
import { SubgroupTitle } from "../../components/Atomics";
import Comment from "../../components/Comment";
import CreatorListItem from "../../components/CreatorListItem";
import SeriesListItem from "../../components/SeriesListItem";
import WritingListItem from "../../components/WritingListItem";
import {
  IDisplayComment,
  IDisplayCreator,
  IDisplaySeries,
  IDisplayWriting,
} from "../../types";
const Library = () => {
  console.log("D");
  const HEARTED_SERIES: IDisplaySeries[] = [
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
  const HEARTED_WRITING: Partial<IDisplayWriting>[] = [
    {
      image: "https://cdn4.buysellads.net/uu/1/41334/1550855401-cc_light.png",
      title: "어도비크리에이티브클라우드",
      hearts: 2833,
      hearted: false,
      _id: "389732894732",
      series: {
        title: "어도비",
      },
    },
    {
      image: "https://cdn4.buysellads.net/uu/1/41334/1550855401-cc_light.png",
      title: "어도비크리에이티브클라우드",
      hearts: 2833,
      hearted: false,
      _id: "38973289732",
      series: {
        title: "어도비",
      },
    },
  ];
  const COMMENTS: IDisplayComment[] = [
    {
      author: {},
      target: {
        id: "384",
        type: "series",
        name: "한국형프로그래밍언어",
      },
      date: new Date(),
      content: "구름OS에 필적할만합니다",
      _id: "3843",
    },
  ];
  const FOLLOWING_CREATOR: Partial<IDisplayCreator>[] = [
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
      <SubgroupTitle
        css={css`
          margin-top: 10px !important;
        `}
      >
        좋아요 한 작품
      </SubgroupTitle>
      <div>
        {HEARTED_SERIES.map((d) => (
          <SeriesListItem
            {...d}
            key={d._id}
            css={css`
              & + & {
                margin-top: 10px;
              }
            `}
          />
        ))}
      </div>
      <SubgroupTitle>좋아요 한 회차</SubgroupTitle>
      {HEARTED_WRITING.map((d) => (
        <WritingListItem {...d} key={d._id} />
      ))}
      <SubgroupTitle>남긴 댓글</SubgroupTitle>
      {COMMENTS.map((d) => (
        <Comment
          {...d}
          key={d._id}
          css={css`
            & + & {
              margin-top: 10px;
            }
          `}
        />
      ))}
      <SubgroupTitle>팔로우하는 작가</SubgroupTitle>
      {FOLLOWING_CREATOR.map((d) => (
        <CreatorListItem
          {...d}
          key={d._id}
          css={css`
            & + & {
              margin-top: 10px;
            }
          `}
        />
      ))}
    </>
  );
};

export default Library;
