import styled from "styled-components";
import { LevelContext } from "./LevelContext";

export default function Section({ level,children }) {
  return (
    <SectionContainer>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  border: 1px solid gray;
  padding: 10px;
  border-radius: 5px;
`;
