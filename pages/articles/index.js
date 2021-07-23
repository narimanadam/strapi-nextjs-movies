import { ArticleCard } from "@movies-app/components";
import React from "react";

const Blog = ({ articles }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-3 gap-5">
        {articles.map(({ id, articleImage, title, author, date }) => (
          <ArticleCard
            id={id}
            image={`${articleImage.url}`}
            title={title}
            author={author}
            date={date}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;

  const res = await fetch(new URL(`${API_URL}/articles`));
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
}

export default Blog;
