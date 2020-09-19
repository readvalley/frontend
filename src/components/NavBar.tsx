import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import {
  Ereader as BookIcon,
  Search as Discover,
  Boy as Me,
} from "css.gg/icons/all";
import { Link, withRouter } from "react-router-dom";
import { ACTIVE_BACKGROUND, ACTIVE_RED } from "../constants";

const PAGES = [
  {
    icon: BookIcon,
    name: "내 서재",
    route: "/",
  },
  {
    icon: () => (
      <Discover
        css={css`
          margin-top: 0px !important;
        `}
      />
    ),
    name: "탐색",
    route: "/discover",
  },
  {
    icon: Me,
    name: "정보",
    route: "/me",
  },
];

const NavBar = withRouter(({ history }) => {
  console.log(history.location.pathname);
  return (
    <Wrapper>
      <Layout>
        {PAGES.map((page) => (
          <div>
            <Link
              to={page.route}
              css={css`
                text-decoration: none;
              `}
            >
              <Button active={history.location.pathname === page.route}>
                <Icon>
                  <page.icon />
                </Icon>
                {history.location.pathname === page.route && (
                  <Name>{page.name}</Name>
                )}
              </Button>
            </Link>
          </div>
        ))}
      </Layout>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding: 20px 40px;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.07);
  position: fixed;
  bottom: 0px;
  width: 100%;
  box-sizing: border-box;
`;

const Layout = styled.div`
  max-width: 334px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  align-items: center;
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
      background-color: ${ACTIVE_BACKGROUND};
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

export default <NavBar />;
