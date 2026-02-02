import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  background: linear-gradient(135deg, #9435c7, #8e6eea);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin: 0 0.5em;
  padding: 0 0.5em;
`;
export const TextWrapper = styled.div`
  padding-left: clamp(0.5em, 0.5em + 0.5vw, 1.25em);
`;

export const Heading = styled.h4`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 500;
`;

export const Balance = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  font-size: clamp(2rem, 1rem + 1.5vw, 2.75rem);
  letter-spacing: 2px;
`;

export const ImgWrapper = styled.div`
  img {
    width: clamp(90px, 15vw, 150px);
  }
`;
