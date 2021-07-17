import styled from "@emotion/styled";
import tw from "twin.macro";

export const Header = styled.header(tw`
  bg-gradient-to-r 
  from-purple-700 
    to-yellow-600 
`);

export const Logo = styled.img`
  height: 60px;
`;

export const Userinfo = styled.div(tw`
    flex
    items-center
`);

export const Img = styled.img(tw`
    rounded-full
    w-12
`);

export const Username = styled.span(tw`
    ml-4
    text-lg
    text-white
    font-bold
`);
