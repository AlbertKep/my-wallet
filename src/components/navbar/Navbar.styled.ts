import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  opacity: 0.6;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  position: fixed;
  bottom: 1em;

  ${({ theme }) => theme.mq.desktop} {
    height: clamp(400px, 70vh, 1000px);
    flex: 1;
    justify-content: normal;
    position: static;
  }
`;

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  margin: 0;
  padding: 0.2em 1em;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-items: baseline;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
    justify-content: normal;
    padding-top: 1em;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  text-align: center;
  flex: 1;
  padding: 0 0.5em;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    opacity: 1;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex: 0;
    margin-bottom: 1em;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  img {
    width: 40px;
  }
  span {
    display: block;
    font-size: clamp(0.5rem, 0.5rem + 1vw, 1.25rem);
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;

    img {
      width: 50px;
    }
  }
`;
