import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;

  h3 {
    font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
    font-weight: 600;
  }
  p,
  strong {
    font-size: clamp(0.8rem, 1rem + 0.5vw, 1.5rem);
    line-height: 1.2em;
  }
`;

export const TransactionDetails = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.25em;
  margin: 1.5em 0;

  p {
    margin: 0.5em;
  }
`;

export const TransactionIdentity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    flex-shrink: 0;
  }

  strong {
    overflow-wrap: anywhere;
  }
`;
