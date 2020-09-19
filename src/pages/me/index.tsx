import { css } from "@emotion/core";
import React from "react";
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { GroupTitle, Horizontal, PageWrapper } from "../../components/Atomics";
import BottomBar from "../../components/BottomBar";
import Info from "./Info";
import Library from "./Library";
import Wallet from "./Wallet";

const SUBPAGES = [
  {
    name: "라이브러리",
    route: "library",
  },
  {
    name: "내 지갑",
    route: "wallet",
  },
  {
    name: "내 정보",
    route: "info",
  },
];

const Me: React.FC<RouteComponentProps> = ({ history, match }) => {
  console.log(history.location.pathname);
  return (
    <>
      <PageWrapper>
        <Horizontal
          css={css`
            & h1 {
              margin-top: 0px;
            }
            a + a {
              margin-left: 10px;
            }
          `}
        >
          {SUBPAGES.map((e, i) => (
            <Link
              to={`${match.path}/${e.route}`}
              css={css`
                color: black;
                text-decoration: none;
              `}
            >
              <GroupTitle
                css={css`
                  opacity: ${(history.location.pathname === "/me" && i === 0) ||
                  history.location.pathname.includes(e.route)
                    ? 1
                    : 0.3};
                `}
              >
                {e.name}
              </GroupTitle>
            </Link>
          ))}
        </Horizontal>
        <Switch>
          <Route path={`${match.path}/library`} component={Library} />
          <Route path={`${match.path}/wallet`} component={Wallet} />
          <Route path={`${match.path}/info`} component={Info} />
          <Redirect path="*" to="/me/library" />
        </Switch>
      </PageWrapper>
      {BottomBar}
    </>
  );
};

export default Me;
