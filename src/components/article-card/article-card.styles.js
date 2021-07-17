import styled from "@emotion/styled";
import tw from "twin.macro";

export const Card = styled.div(tw`
    bg-white
    rounded
    overflow-hidden
`);

export const Content = styled.div(tw`
    py-4
    px-8
`);

export const Wrapper = styled.div(tw`
    flex
    justify-between
    mb-2
`);

export const Author = styled.span(tw`
    font-bold
    text-sm
`);

export const Title = styled.h3(tw`
    font-bold
    text-2xl
`);

export const Date = styled.span(tw`
    text-sm
`);
