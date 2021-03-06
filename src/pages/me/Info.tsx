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
          src="https://avatars3.githubusercontent.com/u/32605822?s=460&u=9fe2838306fda39fbeb45c0ef763b7304a2faa04&v=4"
        />
      </Center>
      <Center
        css={css`
          margin-top: 15px;
        `}
      >
        <Input
          {...nameInput}
          value="여준호"
          size={5}
          css={css`
            text-align: center;
            font-size: 24px;
            max-width: 100%;
          `}
        />
      </Center>
      <InputWithName
        name="이메일"
        value="hanaro0704@gmail.com"
        css={css`
          margin-top: 15px;
        `}
      />
      <InputWithName
        name="지갑"
        value="0x4255b46f7481d420f510dea6cd5cd5de59c5b2db"
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
