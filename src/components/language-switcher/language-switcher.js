import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Styled from "./langugae-switcher.styles";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const filteredRoutes = router.locales.filter(
    (locale) => locale !== router.locale
  );

  return (
    <Styled.Wrapper>
      {filteredRoutes.map((locale) => (
        <Styled.Button key={locale}>
          <Link href={router.asPath} locale={locale}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>{locale === "en-US" ? "EN" : locale.toUpperCase()}</a>
          </Link>
        </Styled.Button>
      ))}
    </Styled.Wrapper>
  );
};

export default LanguageSwitcher;
