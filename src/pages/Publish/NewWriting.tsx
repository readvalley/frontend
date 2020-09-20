import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import {
  DisplayFullwidth,
  DistributeVertical,
  FormatBold,
  FormatHeading,
  FormatItalic,
  Image,
} from "css.gg/icons/all";
import {
  ContentTitle,
  Horizontal,
  IconButtonCss,
} from "../../components/Atomics";
import { css } from "@emotion/core";
import Button from "../../components/Button";
import { close, open } from "../../components/Modal";
import { match, RouteComponentProps } from "react-router-dom";

const NewWriting: React.FC<RouteComponentProps> = ({ match, history }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const append = (text: string) => {
    if (editorRef?.current?.innerHTML) editorRef.current.innerHTML += text;
    editorRef.current?.focus();
  };
  const publishNewWriting = () => {
    close();
    history.goBack();
  };
  return (
    <>
      <Editor ref={editorRef} contentEditable>
        글쓰기를 시작해보세요!
      </Editor>
      <WritingConfig
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Horizontal>
          <IconWrapper
            onClick={() => {
              append("<b>&nbsp");
            }}
          >
            <FormatBold />
          </IconWrapper>
          <IconWrapper
            onClick={() => {
              append("<i>&nbsp");
            }}
          >
            <FormatItalic />
          </IconWrapper>
          <IconWrapper onClick={() => append("<br />")}>
            <DisplayFullwidth />
          </IconWrapper>
        </Horizontal>
        <Button
          onClick={() =>
            open(
              <ContentTitle
                css={css`
                  text-align: center;
                `}
              >
                등록하시겠습니까?
                <Button
                  css={css`
                    width: 100%;
                    margin-top: 10px;
                  `}
                  onClick={publishNewWriting}
                >
                  등록
                </Button>
              </ContentTitle>
            )
          }
        >
          다음
        </Button>
      </WritingConfig>
    </>
  );
};

const Editor = styled.div`
  outline: none;
  padding: 30px 20px;
  font-size: 20px;
  min-height: 100vh;
  padding-bottom: 80px;
  line-height: 35px;
  font-family: RIDIBatang;
  &:br {
    height: 100px;
  }
`;

const WritingConfig = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.07);
  padding: 20px 30px;
  box-sizing: border-box;
`;

const IconWrapper = styled.div<{ active?: boolean }>`
  width: 24px;
  height: 18px;
  --ggs: 1.2;
  opacity: 0.3;
  ${({ active }) =>
    active &&
    css`
      opacity: 0.9;
    `}
  div + & {
    margin-left: 15px;
  }
`;

export default NewWriting;
