import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import getConfig from "next/config";
import { DefaultSeo } from "next-seo";
import Cookies from "universal-cookie";
import { Provider, getSession } from "next-auth/client";

import { HeaderContext, AppContext } from "@movies-app/contexts";
import { Header } from "@movies-app/layout";
import { redirectUser } from "@movies-app/helpers";

import SEO from "../next-seo.config";
import GlobalStyles from "../styles/globals";
import "tailwindcss/tailwind.css";
import "swiper/css/swiper.css";

const theme = {
  colors: {
    primary: "red",
  },
};

const consoleSignatureStyle =
  "font-size: 16px;" +
  "background: linear-gradient(to right, #6d28d9, #d97706);" +
  "color: white;" +
  "text-align: center;" +
  "padding: 10px 15px;" +
  "width: 100%;" +
  "border-radius: 20px;";

const consoleSignatureText = "%cWelcome to my Nextjs Movies App! ";

function MyApp({ Component, pageProps, navigation, jwt, session }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(consoleSignatureText, consoleSignatureStyle);

    if (jwt || session) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [jwt, session]);

  return (
    <AppContext.Provider
      value={{
        isAuth,
      }}
    >
      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Provider session={pageProps.session}>
          <HeaderContext.Provider value={navigation}>
            <Header />
          </HeaderContext.Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const cookies = new Cookies(ctx?.req?.headers.cookie);
  const jwt = cookies.get("jwt");
  const session = await getSession({ ctx });

  const res = await fetch(
    new URL(`${publicRuntimeConfig.API_URL}/navigations`)
  );
  const navigation = await res.json();
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt && session === null) {
    if (ctx.pathname === "/pro") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps,
    navigation,
    jwt,
    session,
  };
};

export default MyApp;
