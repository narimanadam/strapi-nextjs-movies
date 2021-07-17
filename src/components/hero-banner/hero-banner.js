import Button from "components/button/button";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

import * as Styled from "./hero-banner.styles";

export const HeroBanner = () => {
  const { t } = useTranslation("common");

  return (
    <Styled.HeroBanner>
      <Styled.Wrapper>
        <Styled.Title>{t("yourUltimateMoviesGuide")}</Styled.Title>
        <Styled.Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          ipsum doloremque laudantium deleniti perferendis delectus aliquam sit
          reprehenderit maiores quod
        </Styled.Desc>
        <Link href="/movies">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Button type="button" className="mt-8 primary-outline">
              {t("exploreYourFavoriteMovies")}
            </Button>
          </a>
        </Link>
      </Styled.Wrapper>
    </Styled.HeroBanner>
  );
};

export default HeroBanner;
