import styled from "styled-components";

export const Heading = styled.h3`
  font-size: clamp(1.25rem, 1rem + 1.5vw, 2rem);
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 600;
  padding: 0.5em;
`;
