import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import {
  Ereader as BookIcon,
  Search as _Search,
  Boy as Me,
} from "css.gg/icons/all";
import { Link, withRouter } from "react-router-dom";
import { ACTIVE_BACKGROUND, ACTIVE_RED } from "../constants";

const Search: React.FC = (props) => (
  <_Search
    {...props}
    css={css`
      margin-top: 0px !important;
    `}
  />
);

const PAGES = [
  {
    icon: BookIcon,
    name: "내 서재",
    route: "/bookshelf",
  },
  {
    icon: Search,
    name: "탐색",
    route: "/discover",
  },
  {
    icon: Me,
    name: "정보",
    route: "/me",
  },
];

const Searchbar = () => {
  return (
    <SearchbarWrapper>
      <SearchInput placeholder="작품 · 작가를 검색해보세요" />
      <div
        css={css`
          --ggs: 0.8;
          padding: 12px 20px 0px 0px;
          color: #959595;
        `}
      >
        <Search />
      </div>
    </SearchbarWrapper>
  );
};

const BottomBar = withRouter(({ history }) => {
  return (
    <Wrapper>
      {history.location.pathname.includes("/discover") && <Searchbar />}
      <NavWrapper>
        {PAGES.map((page) => (
          <div>
            <Link
              to={page.route}
              css={css`
                text-decoration: none;
              `}
            >
              <Button active={history.location.pathname.includes(page.route)}>
                <Icon>
                  <page.icon />
                </Icon>
                {history.location.pathname.includes(page.route) && (
                  <Name>{page.name}</Name>
                )}
              </Button>
            </Link>
          </div>
        ))}
      </NavWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  /* padding: 20px 0px; */
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.07);
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
`;

const NavWrapper = styled.div`
  max-width: 334px;
  margin: 0px auto;
  display: flex;
  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
`;

const Button = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  box-shadow: none;
  ${({ active }) =>
    active &&
    css`
      background-color: #ffcccc;
      padding: 15px 20px;
      border-radius: 48px;
      box-shadow: 0px 3px 30px #ffcfcf;
      & * {
        color: ${ACTIVE_RED};
      }
    `}
`;

const Icon = styled.div`
  color: black;
`;

const Name = styled.div`
  margin-left: 15px;
  font-size: 15px;
  transition: 1s;
`;

const SearchbarWrapper = styled.div`
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  /* padding-right: 15px; */
`;

const SearchInput = styled.input`
  padding: 15px 20px;
  outline: none;
  border: none;
  flex: 1;
  box-sizing: border-box;
`;

export default <BottomBar />;
