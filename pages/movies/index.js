import React from "react";
import { Card, Button } from "@movies-app/components";
import { useRouter } from "next/router";

const MoviesPage = ({ movies, page, numberOfMovies, limit }) => {
  const router = useRouter();
  const lastPage = Math.ceil(numberOfMovies / limit);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-5 gap-5 mt-8">
        {movies?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="flex justify-center mt-8 justify-around">
        <Button
          disabled={+page <= 1}
          onClick={() => router.push(`/movies?page=${+page - 1}`)}
          className="primary"
        >
          Prev
        </Button>

        {/* {Array(lastPage)
          .fill()
          .map((_, i) => (
            <button
              type="button"
              disabled={+page <= 1}
              onClick={() => router.push(`/movies?page=${+page - 1}`)}
            >
              {i + 1}
            </button>
          ))} */}

        <Button
          type="button"
          disabled={page >= lastPage}
          onClick={() => router.push(`/movies?page=${+page + 1}`)}
          className="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;
  const limit = 10;
  const start = +page === 1 ? 0 : (+page - 1) * limit;
  const numberOfMoviesRes = await fetch(new URL(`${API_URL}/movies/count`));

  const numberOfMovies = await numberOfMoviesRes.json();
  const res = await fetch(
    new URL(`${API_URL}/movies?_limit=${limit}&_start=${start}`)
  );
  const data = await res.json();
  return {
    props: {
      movies: data,
      page,
      numberOfMovies,
      limit,
    },
  };
}

export default MoviesPage;
