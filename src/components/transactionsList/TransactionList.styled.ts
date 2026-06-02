import styled from "styled-components";
import { SectionWrapper } from "../ui/SectionWrapper.styled.ts";

export const StyledSectionWrapper = styled(SectionWrapper)`
  margin: 1em 0;
`;

export const List = styled.ul`
  height: clamp(250px, calc(45vh - 70px), 500px);
  overflow-y: auto;
`;
