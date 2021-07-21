import useTranslation from "next-translate/useTranslation";
import React from "react";
import Cookies from "universal-cookie";

const Pro = ({ articles }) => {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto">
      <h1 className="text-white">{t("ifYouSee")}</h1>
      {articles?.map(({ title, body }) => (
        <div key={title}>
          <h2 className="text-white text-xl font-bold mb-3">{title}</h2>
          <span className="text-white">{body}</span>
        </div>
      ))}
    </div>
  );
};

export async function getInitialProps({ ctx }) {
  const cookies = new Cookies(ctx);
  const jwt = ctx.req ? ctx.req.headers.cookie : cookies.get("jwt");

  const { API_URL } = process.env;

  const res = await fetch(new URL(`${API_URL}/pro-page`), {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI2NjUxMzA1LCJleHAiOjE2MjkyNDMzMDV9.B6fsD91V0Q-5jzFat3wdUlmsvOf0tdzkykeE40a2j60`,
    },
  });
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}

export default Pro;
