import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgrey;
  padding: 0.5em 0;
  gap: 1em;
`;

export const StyledPrice = styled.p<{ $type?: string }>`
  flex: 2;
  font-size: clamp(0.5rem, 1rem + 0.75vw, 1.25rem);
  text-align: center;
  color: ${({ theme, $type }) => ($type === "income" ? theme.colors.green : theme.colors.red)};
`;
export const ImageWrapper = styled.div`
  img {
    width: 50px;
  }
`;
export const InfoWrapper = styled.div`
  flex: 3;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;

  h5 {
    margin: 0;
    font-size: clamp(0.8rem, 1rem + 0.5vw, 1.5rem);
  }

  time {
    font-size: clamp(0.5rem, 1rem + 0.4vw, 1.25rem);
    opacity: 0.7;
  }
`;
