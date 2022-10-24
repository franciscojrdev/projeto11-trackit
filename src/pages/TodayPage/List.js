import { useContext } from "react";
import TrackContext from "../../TrackContext";
import styled from "styled-components";
import b1 from "../../assets/images/c1.svg";
import b2 from "../../assets/images/c2.svg";
import axios from "axios";

export default function List({ el }) {
  const { user } = useContext(TrackContext);

  function handleClick(id, done, el) {
    console.log(el);
    if (!done) {
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,null,
          {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response.data.message));
    } 
    else {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      axios
        .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <TodayList>
      <div>
        <h1>{el.name}</h1>
        <h2>Sequência atual: {el.currentSequence}</h2>
        <h2>Seu recorde: {el.highestSequence}</h2>
      </div>
      <Icon
        src={el.done ? b2 : b1}
        onClick={() => handleClick(el.id, el.done, el)}
      />
    </TodayList>
  );
}
const TodayList = styled.div`
  padding: 10px;
  height: auto;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  font-family: "Lexend Deca";
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  div {
    width: auto;
    height: auto;
    color: #666666;
    font-weight: 400;
    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 13px;
      line-height: 20px;
    }
  }
`;
const Icon = styled.img`
  fill: green;
  cursor: pointer;
`;
