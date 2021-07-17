import React, { useContext } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";
import Cookies from "universal-cookie";

import AppContext from "contexts/app-context";
import { Navigation } from "@movies-app/components";
import ICONS from "../../icons";
import Icon from "../../icons/icons";
import * as Styled from "./header.styles";

export const Header = () => {
  const [session] = useSession();
  const cookies = new Cookies();
  const auth = useContext(AppContext);
  const userInfo = cookies.get("user");

  return (
    <Styled.Header>
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Styled.Logo src="/images/logo.svg" alt="Logo" />
          </a>
        </Link>
        <Navigation />
        {session && (
          <Styled.Userinfo>
            <Styled.Img src={session.user.image} alt="" />
            <Styled.Username>{session.user.name} </Styled.Username>
          </Styled.Userinfo>
        )}
        {auth.isAuth && !session && (
          <Styled.Userinfo>
            <Icon icon={ICONS.user} viewBox={ICONS.user} />
            <Styled.Username>{userInfo?.username} </Styled.Username>
          </Styled.Userinfo>
        )}
      </div>
    </Styled.Header>
  );
};

export default Header;
