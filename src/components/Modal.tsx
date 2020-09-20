import styled from "@emotion/styled";
import React, { useState } from "react";

export let open: (modalElement: JSX.Element) => void;
export let close: () => void;

export const Modal = () => {
  const [modalElement, setModalElement] = useState<JSX.Element | null>();
  open = (_modalElement: JSX.Element) => setModalElement(() => _modalElement);
  close = () => setModalElement(() => null);
  if (!modalElement) return <></>;
  return (
    <BGWrapper onClick={(e) => setModalElement(() => null)}>
      <Wrapper onClick={(e) => e.stopPropagation()}>{modalElement}</Wrapper>
    </BGWrapper>
  );
};

const BGWrapper = styled.div`
  position: fixed;
  top: 0px;
  width: 540px;
  @media screen and (max-width: 640px) {
    width: 100%;
    margin: 0px;
  }
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-sizing: border-box;
`;
