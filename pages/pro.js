import React from "react";
import Cookies from "universal-cookie";

const Pro = ({ articles }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-white">
        if you see this page it means you are an authenticated pro user
      </h1>
      {articles?.articles?.map(({ title, body }) => (
        <div key={title}>
          <h2 className="text-white text-xl font-bold mb-3">{title}</h2>
          <span className="text-white">{body}</span>
        </div>
      ))}
    </div>
  );
};

export async function getInitialProps({ req }) {
  const cookies = new Cookies(req.headers.cookie);
  const jwtToken = cookies.get("jwt");

  const { API_URL } = process.env;

  const res = await fetch(new URL(`${API_URL}/pro-page`), {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
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
