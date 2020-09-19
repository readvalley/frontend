import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { BORDER_COLOR } from "../constants";

export const GroupTitle = styled.h1`
  font-size: 27px;
  margin: 0px;
  margin-bottom: 20px;
  * + & {
    margin-top: 30px;
  }
`;

export const ContentTitle = styled.h3`
  font-size: 18px;
  margin: 0px;
`;

export const Detail = styled.p`
  font-size: 18px;
  margin: 5px 0px 0px 0px;
`;

export const Image = styled.img`
  border: 2px solid ${BORDER_COLOR};
  border-radius: 6px;
`;

export const Horizontal = styled.div`
  display: flex;
`;

export const HorizontalScroller = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 5px;
  & ::-webkit-scrollbar {
    height: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const PageWrapper = styled.div`
  padding: 40px 20px 108px 20px;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LighterDetail = styled(Detail)`
  color: #808080;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e4e4e4;
  margin-top: 20px;
`;

export const CircleImage = styled.img`
  border-radius: 100%;
  object-fit: cover;
`;

export const Chip = styled.div`
  padding: 6px 12px;
  background-color: #ececec;
  font-size: 15px;
  display: inline-block;
  border-radius: 15px;
  & + & {
    margin-left: 5px;
  }
`;

export const SubgroupTitle = styled.h2`
  font-size: 24px;
  color: #4d4d4d;
  margin-top: 10px;
  * + & {
    margin-top: 30px;
  }
  margin-bottom: 20px;
`;

export const IconButtonCss = css`
  color: #bc8888;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid #e4e4e4;
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 6px;
`;

export const SmallBold = styled.p`
  margin: 0px 0px 5px 0px;
  font-size: 15px;
  font-weight: 700;
  opacity: 0.7;
`;
