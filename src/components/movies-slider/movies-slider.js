import React from "react";
import Link from "next/link";
import Swiper from "react-id-swiper";
import { useRouter } from "next/router";

import * as Styled from "./movies-slider.styles";

export const SwiperMoviesSlider = ({ movies }) => {
  const { API_URL } = process.env;

  const params = {
    slidesPerView: 6,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper {...params}>
      {movies.map((movie) => (
        <div className="swiper-slide" key={movie.id}>
          <Link href="/movies/[slug]" as={`/movies/${movie.slug}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <img
                src={`${movie.poster.url}`}
                data-srcset={`${movie.poster.url}`}
                alt={movie.title}
                className="swiper-lazy"
              />
            </a>
          </Link>
        </div>
      ))}
    </Swiper>
  );
};

export const MovieSlider = ({ genre, movies }) => {
  const router = useRouter();
  const filteredMovies = movies.filter(
    (movie) => movie.genre?.title === genre.title
  );

  return (
    <>
      {filteredMovies.length > 0 && (
        <>
          <Styled.Title>
            {router.locale === "fr" ? genre.title_fr : genre.title}
          </Styled.Title>
          <SwiperMoviesSlider movies={filteredMovies} />
        </>
      )}
    </>
  );
};

export default MovieSlider;
