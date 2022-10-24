import Footer from "../../components/Footer/Footer";
import { HabitsBack } from "../../components/StyledComponents/HabitsBack";
import NavBar from "../../components/NavBar/NavBar";
import { Main } from "../../components/StyledComponents/Main";
import { useContext, useEffect, useState } from "react";
import TrackContext from "../../TrackContext";
import axios from "axios";
import { HABITS_SEARCH } from "../../constants/urls";
import styled from "styled-components";
import List from "./List";
export default function TodayPage() {
  const { user } = useContext(TrackContext);
  const [todayItems, setTodayItems] = useState([]);
  const [check, setCheck] = useState(false);
  const [cont, setCont] = useState(0);

  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dataAtual = `${dia}/${mes}`;
  console.log(dataAtual);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(HABITS_SEARCH, config)
      .then((res) => {
        setTodayItems(res.data);
        console.log("teste", res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <HabitsBack>
      <NavBar />
      <Main>
        <Title>Segunda , {dataAtual}</Title>
        <Subtitle cor="#BABABA">Nenhum hábito concluído ainda</Subtitle>
        {todayItems.map((el) => (
          <List el={el} />
        ))}
      </Main>
      <Footer />
    </HabitsBack>
  );
}

export const Title = styled.h1`
  font-family: Lexend Deca;
  font-size: 23px;
  font-weight: 400;
  color: #126ba5;
  margin: 10px 0;
`;
const Subtitle = styled.h2`
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.cor};
  margin: 10px 0;
`;
