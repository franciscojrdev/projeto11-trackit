import NavBar from "../../components/NavBar/NavBar";
import { HabitsBack } from "../../components/StyledComponents/HabitsBack";
// import logo from "../../assets/images/logo.png";
import Footer from "../../components/Footer/Footer";
// import { useContext } from "react";
// import TrackContext from "../../TrackContext";
import { Main } from "../../components/StyledComponents/Main";
import styled from "styled-components";
import { useState } from "react";
import CreateHabit from "./CreateHabit";
import ListHabits from "./ListHabits";

export default function Habits() {
  const [showCard, setShowCard] = useState(false);
  return (
    <HabitsBack>
      <NavBar />
      <Main>
        <Header>
          <h1>Meus hábitos</h1>
          <button onClick={() => setShowCard(!showCard)}>+</button>
        </Header>
        {showCard ? <CreateHabit setShowCard={setShowCard} /> : ""}
        <ListHabits />
      </Main>
      <Footer />
    </HabitsBack>
  );
}

const Header = styled.header`
  height: 40px;
  width: 100%;
  font-family: "Lexend Deca";
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 40px;
    height: 40px;
    background-color: #52b6ff;
    font-size: 27px;
    border: none;
    border-radius: 5px;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
  }
  h1 {
    font-size: 23px;
    font-weight: 400;
    color: #126ba5;
  }
`;

