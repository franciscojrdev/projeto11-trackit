import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import TrackContext from "../../TrackContext";
import { HABITS_LIST } from "../../constants/urls";

export default function ListHabits() {
  const [items, setItems] = useState([]);
  const { user } = useContext(TrackContext);
  useEffect(() => {
    const config = {
      headers: {
       "Authorization": `Bearer ${user.token}`,
      },
    };

    axios
      .get(HABITS_LIST, config)
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <>
      {!items ? (
        <InfoText>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </InfoText>
      ) : (
        <h1>Hello</h1>
      )}
    </>
  );
}

const InfoText = styled.h2`
  font-family: "Lexend Deca";
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  color: #666666;
  text-align: left;
`;

const ListContainer = 
