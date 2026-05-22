import styled from "styled-components";
import { MainSection } from "@/components/ui/MainSection.styled.ts";
import { Surface } from "@/components/ui/Surface.styled.ts";

export const StyledMainSection = styled(MainSection)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const TransactionWrapper = styled(Surface)`
  max-height: 500px;
  overflow-y: auto;
  padding: 0.5em;
`;
