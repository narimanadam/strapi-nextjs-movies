import React from "react";
import getConfig from "next/config";
import useTranslation from "next-translate/useTranslation";
import cookies from "next-cookies";

const Pro = ({ articles }) => {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto">
      <h1 className="text-white">{t("ifYouSee")}</h1>
      {console.log("Arrrr", articles)}
      {articles.articles.map(({ title, body }) => (
        <div key={title}>
          <h2 className="text-white text-xl font-bold mb-3">{title}</h2>
          <span className="text-white">{body}</span>
        </div>
      ))}
    </div>
  );
};

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(ctx) {
  const { API_URL } = process.env;
  const jwt = cookies(ctx).jwt || "";

  const response = await fetch(
    new URL(`${publicRuntimeConfig.API_URL}/pro-page`),
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
}

export default Pro;
