import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  padding: 0.5em;
  ${({ theme }) => theme.mq.desktop} {
    max-height: 250px;
    overflow-y: auto;
  }
  li {
    display: grid;
    grid-template-columns: 1fr 60px 70px;
    align-items: center;
    font-size: clamp(1rem, 0.8rem + 0.4vw, 1.8rem);
    padding: 0.3em 0;
    border-top: 2px solid #e5e5e5;
    font-weight: 500;
  }

  span {
    display: flex;
    align-items: center;
  }
`;
