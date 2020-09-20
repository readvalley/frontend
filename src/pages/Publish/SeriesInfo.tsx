import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import {
  ContentTitle,
  GroupTitle,
  LighterDetail,
  PageWrapper,
  Image,
} from "../../components/Atomics";
import BottomBar from "../../components/BottomBar";
import Button from "../../components/Button";
import InputWithName from "../../components/InputWithName";
import { open, close } from "../../components/Modal";
import WritingListItem from "../../components/WritingListItem";
import { IDisplayWriting, Status } from "../../types";

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
      <ContentTitle>새 회차 등록</ContentTitle>
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
      <InputWithName
        name="단가 (RPT)"
        css={css`
          margin-top: 10px;
        `}
      />
      <Link to={`${history.location.pathname}/new`}>
        <Button
          css={css`
            width: 100%;
            margin-top: 10px;
          `}
          onClick={close}
        >
          다음
        </Button>
      </Link>
    </div>
  );
});

const getWritings = (id: string): Partial<IDisplayWriting>[] => [
  {
    hearted: false,
    title: "왜 고교생은 사회적으로 문제가 되는가?",
    price: 30,
    image: "https://cdn.clien.net/web/api/file/F01/10589114/55662d23e74cca.jpg",
    hearts: 2037,
    _id: "29292193",
    status: Status.PUBLIC,
    purchases: 12,
  },
  {
    hearted: false,
    title: "왜 고교생은 사회적으로 문제가 되는가?",
    price: 30,
    image: "https://cdn.clien.net/web/api/file/F01/10589114/55662d23e74cca.jpg",
    hearts: 2037,
    _id: "29292194",
    status: Status.PUBLIC,
    purchases: 7,
  },
];

const SeriesInfo: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [writings, setWritings] = useState<Partial<IDisplayWriting>[]>();
  useEffect(() => {
    setWritings(() => getWritings(match.params.id));
    console.log(match.url);
  }, [match]);
  const addNewWriting = () => {
    open(<AddNew />);
  };
  if (!writings) return <></>;
  return (
    <>
      <PageWrapper>
        <GroupTitle>회차</GroupTitle>
        {writings.map((d) => (
          <Link
            to={`${match.url}/${d._id}`}
            css={css`
              & + & {
                margin-top: 10px;
              }
              text-decoration: none;
              color: inherit;
              display: inline-block;
            `}
          >
            <WritingListItem disableLink {...d} key={d._id} />
          </Link>
        ))}
        <Button
          css={css`
            width: 100%;
            margin-top: 10px;
          `}
          onClick={addNewWriting}
        >
          새 회차 등록
        </Button>
      </PageWrapper>
      {BottomBar}
    </>
  );
};

export default SeriesInfo;
