import styled from "@emotion/styled";
import tw from "twin.macro";

export const Input = styled.input`
  ${tw`
        bg-none
        px-3
        h-12
        w-full
        rounded-full
        border-2
        outline-none
    `}

  &.outline {
    ${tw`
        bg-transparent
        px-3
        h-12
        w-full
        rounded-full
        text-white
        placeholder-white
    `}
  }
`;
