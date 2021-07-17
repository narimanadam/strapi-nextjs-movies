import styled from "@emotion/styled";
import tw from "twin.macro";

export const Card = styled.div(tw`
    bg-white
    rounded
    overflow-hidden
`);

export const Poster = styled.img(tw`
    object-cover
    w-full
    h-auto
`);

export const Body = styled.div(tw`
    py-2
    px-4
`);

export const Title = styled.h3(tw`
    font-bold
    mb-2
    text-xl
`);

export const Desc = styled.span(tw`
    max-w-full
    truncate
    
`);
