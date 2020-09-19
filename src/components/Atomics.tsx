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
