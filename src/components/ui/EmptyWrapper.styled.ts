import styled from "styled-components";
import { Surface } from "./Surface.styled.ts";

export const EmptyWrapper = styled(Surface)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: clamp(400px, calc(65vh - 70px), 1000px);
  margin: 0.5em auto;
  padding: 1em 0.5em;
`;
