import React from "react";
import Image from "next/image";
import Link from "next/link";

import * as Styled from "./article-card.styles";

export const ArticleCard = ({ id, image, title, author, date }) => (
  <Styled.Card>
    <Link href="/articles/[id]" as={`/articles/${id}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <Image src={image} alt={title} width={600} height={300} />
        <Styled.Content>
          <Styled.Wrapper>
            <Styled.Author>{author}</Styled.Author>
            <Styled.Date>{date}</Styled.Date>
          </Styled.Wrapper>
          <Styled.Title className="text-black">{title}</Styled.Title>
        </Styled.Content>
      </a>
    </Link>
  </Styled.Card>
);

export default ArticleCard;
