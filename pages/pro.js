import React from "react";
import cookies from "next-cookies";
import Cookies from "universal-cookie";
import useTranslation from "next-translate/useTranslation";
import { getSession } from "next-auth/client";

const Pro = ({ articles }) => {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto">
      <h1 className="text-white">{t("ifYouSee")}</h1>
      {articles?.articles?.map(({ title, body }) => (
        <div key={title}>
          <h2 className="text-white text-xl font-bold mb-3">{title}</h2>
          <span className="text-white">{body}</span>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const cookie = new Cookies();

  // const jwt = cookies(ctx).jwt || "";
  const jwt = cookie.get(ctx).jwt || "";

  const { API_URL } = process.env;

  const response = await fetch(new URL(`${API_URL}/pro-page`), {
    headers: {
      Authorization: `Bearer ${session ? session.jwt : jwt}`,
    },
  });
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
}

export default Pro;
