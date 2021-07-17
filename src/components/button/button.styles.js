import styled from "@emotion/styled";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`
    py-4
    px-6
    font-bold
    border-2
    border-solid
    border-transparent
    rounded-full
    transition
    duration-500
    ease-in-out
    outline-none
    `}
  &[disabled] {
    ${tw`
        opacity-25
        cursor-not-allowed
    `}
  }

  &.primary {
    ${tw`
        bg-purple-700
        text-white
        hover:bg-white
        hover:text-purple-700
    `}
  }

  &.primary-outline {
    ${tw`
        text-white
        border-white
        hover:bg-white
        hover:text-purple-700
    `}
  }
  &.link {
    ${tw`
        text-white
        border-none
        p-0
        font-normal
    `}
  }
`;
