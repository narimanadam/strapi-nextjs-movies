import React from "react";
import * as Styled from "./article-item.styles";

export const ArticleItem = ({ title, author, date, body }) => {
  return (
    <Styled.ArticleItem>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Wrapper>
        <Styled.Author>{author}</Styled.Author>
        <Styled.Date>{date}</Styled.Date>
      </Styled.Wrapper>
      <Styled.Body dangerouslySetInnerHTML={{ __html: body }} />
    </Styled.ArticleItem>
  );
};

export default ArticleItem;
