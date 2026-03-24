import styled, { css, keyframes } from "styled-components";

const enter = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const leave = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const enterAnimation = () => css`
  animation: ${enter} 0.25s ease-out;
`;

const leaveAnimation = () => css`
  animation: ${leave} 0.2s ease-in forwards;
`;

export const Wrapper = styled.div<{ $mounted: boolean; $visible: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.lightBeige};
  padding: 0.2em 1em;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 600;
  ${({ $mounted, $visible }) =>
    !$mounted
      ? css`
          animation: none;
        `
      : $visible
        ? enterAnimation
        : leaveAnimation};
`;
