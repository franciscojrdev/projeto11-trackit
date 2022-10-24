import axios from "axios";
import styled from "styled-components";
import icon from "../../assets/images/icon.png";
import { botoes } from "../../constants/mock";

export default function ContainerList({ name, days, setItems, items, id, token}) {
  function deletePost(id) {
    const config = {
      headers:{
        "Authorization": `Bearer ${token}`
      }
    }
    axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
    ,config).then((res)=>console.log(res.data))
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <Container>
      <div>
        <h1 data-identifier="habit-name">{name}</h1>
        <img data-identifier="delete-habit-btn" src={icon} onClick={() => deletePost(id)} />
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
    cursor: pointer;
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
