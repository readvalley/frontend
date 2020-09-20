import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import axios from "axios";

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

const getSeriesData = async (id: string) => {
  const { data: { book, streams } } = await axios.get('http://localhost:5000/book/5f66ebb327e6032ba0d83557');
  console.log(book)

  return {
    ...book,
    streams,
    title: book.title,
    image: book.thumbnailURL,
    hearts: 2,
    hearted: false,
    creator: {
      name: '박정한',
      _id: "2097",
    },
    category: "경제 · 자기계발",
    intro: book.description,
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
        content: "감동적이군요..",
        author: {
          name: "revolutionary",
          image: "https://avatars1.githubusercontent.com/u/35295182?v=4",
        },
        _id: "D2D2D2",
      },
      {
        date: new Date(),
        content: "대단한 사람이네요 ㅎㅎ",
        author: {
          name: "cokia",
          image: "https://avatars3.githubusercontent.com/u/24792377?v=4",
        },
        _id: "D2D2D3",
      },
    ],
    currentReading: 3,
  };
};

const Series: React.FC<{ id: string }> = ({ id }) => {
  const [seriesData, setSeriesData] = useState<any>();
  const [isAfterPay, setIsAfterPay] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getSeriesData(id);
      console.log(data)
      setSeriesData(data as any);
    };

    getData();
  }, [id]);

  const initDash = () => {
    if (!seriesData) return;
    console.log('initDash')
    const protData = {
      "org.w3.clearkey": {
          "clearkeys": {
              "jfSChn1inQMBWhOaZtKoAA": "jfSChn1inQMBWhOaZtKoAA"
          }
      }
    };
    console.log(seriesData)
    var video,
        player,
        url = `http://localhost:5000${seriesData.streams[0]}`;

    video = document.querySelector("video");
    // @ts-ignore
    player = dashjs.MediaPlayer().create();
    player.initialize(video, url, true);
    player.setProtectionData(protData);
  }

  useEffect(() => {
    initDash();
  }, [seriesData]);

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
          margin: 10px 0;
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
      {!isAfterPay ? (
        <Button
          style={{ marginTop: 25 }}
          onClick={() => setTimeout(() => {
            window.alert('<일론 머스크>를 구매했습니다.');
            setIsAfterPay(true);
          }, 2000)}
        >
          48 RCT로 구매하기
        </Button>
      ) : (
        <>
        <SubgroupTitle>내용</SubgroupTitle>
        <div>
          <video style={{ width: '100%', display: 'none' }}></video>
          {[...Array(seriesData.pages)].map((v, index) => (
            <img
              style={{ width: '100%' }}
              src={`http://localhost:5000/streams/${seriesData._id}-${index}.png`}
              key={index}
            />
          ))}
        </div>
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
        {seriesData.comments?.map((d: any) => (
          <Comment {...d} />
        ))}
        </>
      )}
    </PageWrapper>
  );
};

export default Series;
