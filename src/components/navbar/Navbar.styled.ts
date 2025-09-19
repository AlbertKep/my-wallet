import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  opacity: 0.6;
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;

  ${({ theme }) => theme.mq.desktop} {
    height: 90svh;
  }
`;

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: clamp(280px, 300px + 5vw, 80%);
  margin: 0;
  padding: 0.2em 0.6em;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-items: baseline;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
    align-items: center;
    justify-content: normal;
    padding-top: 3em;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  text-align: center;
  flex: 1;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    opacity: 1;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex: 0;
    margin-bottom: 1em;

    a {
      display: flex;
      align-items: center;
    }

    img {
      width: 75px;
    }
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
    font-size: clamp(0.5rem, 0.5rem + 1vw, 3rem);
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;

    img {
      width: 75px;
    }
  }
`;
