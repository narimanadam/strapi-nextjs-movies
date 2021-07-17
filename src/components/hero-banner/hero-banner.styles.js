import styled from "@emotion/styled";
import tw from "twin.macro";

export const HeroBanner = styled.div(tw`
    bg-gradient-to-r 
    from-purple-700 
    to-yellow-600 
    h-auto
    py-52
`);

export const Wrapper = styled.div(tw`
    flex
    flex-col
    items-center
    justify-center
`);

export const Title = styled.h1(tw`
    text-white
    text-5xl
    m-0
    uppercase
    mb-2
`);

export const Desc = styled.span(tw`
    text-white
    text-base
    max-w-2xl
`);
