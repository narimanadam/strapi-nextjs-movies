import React from "react";
import { ActorsSlider } from "@movies-app/components";
import * as Styled from "./movie-item.styles";

export const MovieItem = ({ movie }) => (
  <Styled.MovieItem>
    <Styled.MovieDetailsWrapper>
      <Styled.Poster src={`${movie.poster.url}`} />
      <Styled.Wrapper>
        <Styled.Title>{movie.title}</Styled.Title>
        <Styled.Date>{movie.release_date}</Styled.Date>
        <Styled.Body dangerouslySetInnerHTML={{ __html: movie.description }} />
      </Styled.Wrapper>
    </Styled.MovieDetailsWrapper>
    <ActorsSlider actors={movie.actors} />
  </Styled.MovieItem>
);

export default MovieItem;
