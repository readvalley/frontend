import { css } from "@emotion/core";
import React from "react";
import {
  Center,
  CircleImage,
  Horizontal,
  Input,
} from "../../components/Atomics";
import Button from "../../components/Button";
import InputWithName from "../../components/InputWithName";
import useInput from "../../hooks/useInput";

const Info = () => {
  const nameInput = useInput("");
  return (
    <>
      <Center
        css={css`
          margin-top: 40px;
        `}
      >
        <CircleImage
          width={120}
          height={120}
          src="https://miro.medium.com/max/4000/1*9eMyWLYOqU5aqBtVoFoi3Q.jpeg"
        />
      </Center>
      <Center
        css={css`
          margin-top: 15px;
        `}
      >
        <Input
          {...nameInput}
          size={nameInput.value.length + 2}
          css={css`
            text-align: center;
            font-size: 24px;
            max-width: 100%;
          `}
        />
      </Center>
      <InputWithName
        name="이메일"
        css={css`
          margin-top: 15px;
        `}
      />
      <Horizontal
        css={css`
          margin-top: 10px;
          justify-content: flex-end;
          & * + * {
            margin-left: 10px;
          }
        `}
      >
        <Button>비밀번호 변경</Button>
        <Button>저장</Button>
      </Horizontal>
      <Horizontal
        css={css`
          margin-top: 10px;
          justify-content: flex-end;
          & * + * {
            margin-left: 10px;
          }
        `}
      >
        <Button>로그아웃</Button>
        <Button>출판등록</Button>
      </Horizontal>
    </>
  );
};

export default Info;
