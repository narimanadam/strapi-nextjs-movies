import styled from "@emotion/styled";
import tw from "twin.macro";

export const ArticleItem = styled.div(tw`
    max-w-6xl
    m-auto
`);

export const Title = styled.div(tw`
    text-white
    text-4xl
    mb-5
`);

export const Wrapper = styled.div(tw`
    flex 
    justify-between 
    mb-3
`);

export const Author = styled.div(tw`
    font-bold
    text-white
`);

export const Date = styled.div(tw`
    text-white
`);

export const Body = styled.div`
  ${tw`text-white`}
  p {
    ${tw`
        mb-4
        text-lg
    `}
  }
  h2 {
    ${tw`
        font-bold
        mb-2
        text-2xl
    `}
  }

  blockquote p {
    ${tw`
        text-gray-400
        text-2xl
        px-10
    `}
  }

  img {
    ${tw`
        m-auto
        my-8
    `}
  }
`;
