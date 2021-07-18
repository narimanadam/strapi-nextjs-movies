import React, { useCallback, useContext } from "react";
import Cookies from "universal-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderContext, AppContext } from "@movies-app/contexts";
import { Button, LanguageSwitcher } from "@movies-app/components";
import useTranslation from "next-translate/useTranslation";
import { signOut } from "next-auth/client";

import * as Styled from "./navigation.styles";

export const Navigation = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const cookies = new Cookies();
  const menuItems = useContext(HeaderContext);
  const auth = useContext(AppContext);

  const logout = useCallback(() => {
    signOut();
    cookies.remove("jwt");
    cookies.remove("user");
  }, []);

  return (
    <Styled.Navigation>
      <Styled.List>
        {menuItems.map(({ slug_en, title_en, title_fr, id }) => (
          <Styled.Item
            key={id}
            className={`${router.pathname === slug_en ? "text-white" : ""}`}
          >
            <Link href={slug_en}>
              {router.locale === "en-US" ? title_en : title_fr}
            </Link>
          </Styled.Item>
        ))}
        <Styled.Item>
          {auth.isAuth ? (
            <Button type="button" className="link" onClick={logout}>
              {t("logout")}
            </Button>
          ) : (
            <Link href="/login" className="link">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                {t("login")} / {t("register")}
              </a>
            </Link>
          )}
        </Styled.Item>
        <Styled.Item>
          <LanguageSwitcher />
        </Styled.Item>
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
