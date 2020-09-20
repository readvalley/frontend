import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  ContentTitle,
  Dropdown,
  GroupTitle,
  Horizontal,
  Image,
  LighterDetail,
  PageWrapper,
  Textarea,
} from "../../components/Atomics";
import BottomBar from "../../components/BottomBar";
import Button from "../../components/Button";
import InputWithName from "../../components/InputWithName";
import { close, open } from "../../components/Modal";
import SeriesListItem from "../../components/SeriesListItem";
import { IDisplaySeries } from "../../types";
import getUserInfo from "../../utils/user";

const getMySerieses = (id: string): Partial<IDisplaySeries>[] => [
  {
    category: "문학 · 판타지",
    hearts: 1273,
    title: "틀딱오타쿠가 빠질 수 없지",
    image: "https://pbs.twimg.com/media/EiQb3zYVoAAwhue?format=jpg",
    _id: "2473",
    purchases: 273,
  },
  {
    category: "문학 · 판타지",
    hearts: 1273,
    title: "틀딱오타쿠가 빠질 수 없지",
    image: "https://pbs.twimg.com/media/EiQb3zYVoAAwhue?format=jpg",
    _id: "2472",
    purchases: 273,
  },
];

const AddNew = withRouter(({ match, history }) => {
  const fileInput = document.createElement("input");
  const [photo, setPhoto] = useState<string>();
  useEffect(() => {
    fileInput.type = "file";
    fileInput.addEventListener("change", () => {
      if (fileInput.files)
        setPhoto(window.URL.createObjectURL(fileInput.files[0]));
    });
  }, [fileInput]);
  return (
    <div>
      <ContentTitle>새 작품 등록</ContentTitle>
      {photo ? (
        <Image
          src={photo}
          css={css`
            width: 100%;
            margin-top: 10px;
          `}
        />
      ) : (
        <div
          css={css`
            height: 180px;
            border: 1px solid #e4e4e4;
            margin-top: 10px;
            padding-top: 66px;
            box-sizing: border-box;
            text-align: center;
          `}
          onClick={() => fileInput.click()}
        >
          <LighterDetail>클릭해서 표지사진을 등록해주세요</LighterDetail>
          <LighterDetail>권장 비율: 1440 x 960 (3 : 2)</LighterDetail>
        </div>
      )}
      <InputWithName
        name="제목"
        css={css`
          margin-top: 10px;
        `}
      />
      <Horizontal
        css={css`
          align-items: center;
          margin-top: 10px;
          & > * + * {
            margin-left: 10px;
          }
        `}
      >
        <LighterDetail>분류</LighterDetail>
        <Dropdown>
          <option>문학</option>
        </Dropdown>
        <Dropdown>
          <option>고전</option>
          <option>시</option>
          <option>SF</option>
          <option>정통소설</option>
          <option>로맨스</option>
          <option>판타지</option>
        </Dropdown>
      </Horizontal>
      <LighterDetail
        css={css`
          margin-top: 10px;
        `}
      >
        작품 설명
      </LighterDetail>
      <Textarea
        css={css`
          margin-top: 10px;
          width: 100%;
        `}
      ></Textarea>
      <Button
        css={css`
          width: 100%;
          margin-top: 10px;
        `}
        onClick={close}
      >
        등록
      </Button>
    </div>
  );
});

const Series: React.FC = () => {
  const [mySerieses, setMySerieses] = useState<Partial<IDisplaySeries>[]>();
  useEffect(() => {
    const uid = getUserInfo("uid");
    if (!uid) {
      return;
    }
    setMySerieses(() => getMySerieses(uid));
  }, []);
  return (
    <>
      <PageWrapper>
        <GroupTitle>작품 목록</GroupTitle>
        {mySerieses?.length &&
          mySerieses.map((series) => (
            <Link
              to={`/publish/series/${series._id}`}
              css={css`
                color: black;
                text-decoration: none;
                display: inline-block;
                & + & {
                  margin-top: 10px;
                }
              `}
            >
              <SeriesListItem disableLink {...series} key={series._id} />
            </Link>
          ))}
        <Button
          css={css`
            width: 100%;
            margin-top: 10px;
          `}
          onClick={() => open(<AddNew />)}
        >
          새 작품 등록
        </Button>
      </PageWrapper>
      {BottomBar}
    </>
  );
};

export default Series;
