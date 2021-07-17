import styled from "@emotion/styled";
import tw from "twin.macro";

export const Img = styled.img(tw`
    float-left
    mr-8
    max-w-xs
`);

export const Name = styled.h3(tw`
    text-white
    text-3xl
    mb-4
`);

export const Bio = styled.div`
  ${tw`text-white`}

  p {
    ${tw`
        mb-4
        text-lg
    `}
  }
`;

export const Title = styled.span(tw`
    text-white
    block
    text-3xl
    my-8
`);
