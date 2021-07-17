import React from "react";

import { HeroBanner, MovieSlider } from "@movies-app/components";

const Home = ({ movies, genres }) => {
  return (
    <>
      <HeroBanner />
      <div className="container mx-auto mb-8">
        {genres.map((genre) => (
          <MovieSlider genre={genre} movies={movies} key={genre.id} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;

  const moviesRes = await fetch(new URL(`${API_URL}/movies`));
  const genresRes = await fetch(new URL(`${API_URL}/genres`));

  const movies = await moviesRes.json();
  const genres = await genresRes.json();
  return {
    props: {
      movies,
      genres,
    },
  };
}

export default Home;
