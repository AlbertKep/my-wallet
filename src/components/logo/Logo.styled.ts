import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  img {
    width: clamp(50px, 50px + 1vw, 100px);
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.5rem, 1rem + 3vw, 3rem);
`;
