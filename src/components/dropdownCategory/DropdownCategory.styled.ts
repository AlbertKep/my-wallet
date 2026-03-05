import styled from "styled-components";

export const DropdownCategoryWrapper = styled.div`
  position: relative;
  grid-area: category;
`;

export const SelectedCategory = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: clamp(0.8rem, 0.8rem + 0.5vw, 2rem);
  background-color: ${({ theme }) => theme.colors.warmBeige};
  border-radius: 12px;
  padding: 2px 5px;
  margin: 1em 0;

  p {
    margin: 0;
  }

  img {
    vertical-align: middle;
  }
`;
export const DropdownArrow = styled.img<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.35s ease;
`;

export const CategoryList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 50%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-10px")});
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
`;

export const CategoryItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: clamp(0.6rem, 0.8rem + 0.5vw, 2rem);
  border: 1px solid transparent;
  padding: 0.25em 0.5em;

  &:hover {
    background-color: ${({ theme }) => theme.colors.warmBeige};
    border: 1px solid #e0c9a8;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;
