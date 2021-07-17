import React, { useMemo } from "react";
import { markdown } from "markdown";

import { SwiperMoviesSlider } from "@movies-app/components";
import * as Styled from "./actor-item.styles";

export const ActorItem = ({ name, bio, img, movies }) => {
  const parsedBio = useMemo(() => markdown.toHTML(bio), [bio]);

  return (
    <>
      <Styled.Img src={`${img}`} />
      <Styled.Name>{name}</Styled.Name>
      <Styled.Bio dangerouslySetInnerHTML={{ __html: parsedBio }} />
      <Styled.Title>Movies</Styled.Title>
      <SwiperMoviesSlider movies={movies} />
    </>
  );
};

export default ActorItem;
