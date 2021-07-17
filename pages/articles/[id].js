import React, { useMemo } from "react";
import { markdown } from "markdown";
import { ArticleItem } from "@movies-app/components";
import { useRouter } from "next/router";

const BlogItemPage = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    // your loading indicator
    return <div>loading...</div>;
  }
  const parsedBody = useMemo(() => markdown.toHTML(article.body), [article]);

  return (
    <div className="container mx-auto mt-8">
      <ArticleItem
        title={article.title}
        author={article.author}
        date={article.date}
        body={parsedBody}
      />
    </div>
  );
};

export default BlogItemPage;

export const getStaticPaths = async () => {
  const { API_URL } = process.env;

  const res = await fetch(new URL(`${API_URL}/articles`));
  const articles = await res.json();

  // generate the paths
  const paths = articles.map((article) => ({
    params: {
      id: article.id.toString(),
    },
    // keep in mind if post.id is a number you need to stringify post.id
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { API_URL } = process.env;

  const { id } = context.params;
  const res = await fetch(new URL(`${API_URL}/articles/${id}`));
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
