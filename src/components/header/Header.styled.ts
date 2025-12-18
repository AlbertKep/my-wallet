import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em 0.5em;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.5rem, 1rem + 3vw, 3rem);
`;

export const Wrapper = styled.div`
  display: flex;

  img {
    width: clamp(50px, 50px + 1vw, 100px);
  }
`;

export const ButtonWrapper = styled.div`
  margin: auto 0;
`;
