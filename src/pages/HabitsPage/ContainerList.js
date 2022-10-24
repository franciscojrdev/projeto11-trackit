import styled from "styled-components";
import icon from "../../assets/images/icon.png";
import { botoes } from "../../constants/mock";

export default function ContainerList({ name, days }) {
  return (
    <Container>
      <div>
        <h1>{name}</h1>
        <img src={icon} />
      </div>
      {botoes.map((el) => (
        <Buttons
          cor={days.includes(el.id) ? "#CFCFCF" : "#fff"}
          corText={!days.includes(el.id) ? "#CFCFCF" : "#fff"}
        >
          {el.name}
        </Buttons>
      ))}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: "Lexend Deca";
  padding: 10px;
  div {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
  }
  img {
    height: 15px;
    width: 13px;
  }
`;

const Buttons = styled.button`
  background-color: ${(props) => props.cor};
  color: ${(props) => props.corText};
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;

  font-family: Lexend Deca;
  font-size: 20px;
  font-weight: 400;
`;
