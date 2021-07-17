import React from "react";
import { Global, css } from "@emotion/react";
import normalize from "./normalize";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        ${normalize}
        .swiper-slide img {
          object-fit: cover;
        }
      `}
    />
  </>
);

export default GlobalStyles;
