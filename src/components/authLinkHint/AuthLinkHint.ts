import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthLinkWrapper = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
  text-align: center;
  margin-top: 2em;
`;

export const AuthLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.white}`};
  padding-bottom: 2px;
`;
