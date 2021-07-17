import React from "react";
import { NextSeo } from "next-seo";

import { MovieItem } from "@movies-app/components";
import { useRouter } from "next/router";

const Movie = ({ movie }) => {
  const router = useRouter();

  if (router.isFallback) {
    // your loading indicator
    return <div>loading...</div>;
  }
  const SEO = {
    title: `Next Movies | ${movie?.title}`,
    description: movie?.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <MovieItem movie={movie} />
    </>
  );
};

export default Movie;

export const getStaticPaths = async () => {
  const { API_URL } = process.env;

  const res = await fetch(new URL(`${API_URL}/movies`));
  const movies = await res.json();

  // generate the paths
  const paths = movies.map((movie) => ({
    params: {
      slug: movie.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { API_URL } = process.env;

  const { slug } = context.params;
  const res = await fetch(new URL(`${API_URL}/movies?slug=${slug}`));
  const movie = await res.json();
  console.log("moviiieeee", movie);

  return {
    props: {
      movie: movie[0],
    },
  };
};
