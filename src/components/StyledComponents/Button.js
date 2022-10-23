import styled from "styled-components";

const PatternButton = styled.button`
  height: 45px;
  width: 100%;
  border-radius: 4.636363506317139px;
  background-color: #52b6ff;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 21px;
  font-weight: 400;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`;

export default PatternButton;
