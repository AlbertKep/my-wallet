import { css } from "styled-components";

export const dropdownMotion = css<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-10px")});
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
`;
