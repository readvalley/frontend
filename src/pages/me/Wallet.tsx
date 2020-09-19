import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { Copy, Eye } from "css.gg/icons/all";
import {
  Horizontal,
  IconButtonCss,
  SubgroupTitle,
} from "../../components/Atomics";
import Callout from "../../components/Callout";

const Wallet = () => (
  <>
    <SubgroupTitle
      css={css`
        margin-top: 10px !important;
      `}
    >
      지갑 잔액
    </SubgroupTitle>
    <Balance>
      540 <UnitBalance>KLAY</UnitBalance>
    </Balance>
    <Wonhwa>386,640원</Wonhwa>
    <Horizontal
      css={css`
        margin-top: 10px;
      `}
    >
      <WalletAddress>0xb9456fd65a6810b19df24...</WalletAddress>
      <Copy css={IconButtonCss} />
      <Eye
        css={[
          IconButtonCss,
          css`
            margin-left: 10px;
          `,
        ]}
      />
    </Horizontal>
    <Callout calloudId="HOWTOCHARGE">
      위 주소로 KLAY를 송금하여 잔액을 충전해요
    </Callout>
    <SubgroupTitle
      css={css`
        margin-bottom: 10px;
      `}
    >
      거래 내역
    </SubgroupTitle>
    <table
      css={css`
        width: 100%;
        border-spacing: 0 10px;
      `}
    >
      <thead>
        <tr>
          <TableHead>일시</TableHead>
          <TableHead>금액</TableHead>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Data>7월 8일</Data>
          <Data>-3413 KLAY</Data>
        </tr>
      </tbody>
    </table>
    <Callout calloudId="HOWTOSEETRANSACTION">
      거래내역을 클릭하면 트랜잭션을 볼 수 있어요
    </Callout>
  </>
);

const Balance = styled.h1`
  font-family: HangeulNuri;
  margin-top: 20px;
  color: #ff5c5c;
  margin-bottom: 0px;
  font-size: 48px;
`;

const UnitBalance = styled.span`
  font-size: 32px;
  opacity: 0.7;
`;

const Wonhwa = styled.p`
  color: #ff8c8c;
  margin-top: 3px;
  font-size: 18px;
  margin-bottom: 0px;
`;

const WalletAddress = styled.p`
  color: black;
  font-size: 18px;
  opacity: 0.6;
  font-weight: 700;
  margin-top: 0px;
  flex: 1;
`;

const TableHead = styled.td`
  font-size: 18px;
  color: #808080;
`;

const Data = styled.td`
  font-size: 18px;
  margin-top: 10px;
`;

export default Wallet;
