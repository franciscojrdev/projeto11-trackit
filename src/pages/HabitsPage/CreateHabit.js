import styled from "styled-components";
import { HABITS_URL } from "../../constants/urls";
import { botoes } from "../../constants/mock";
import { useState } from "react";
import { useContext } from "react";
import TrackContext from "../../TrackContext";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function CreateHabit({ setShowCard }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(TrackContext);

  function handleClick(el) {
    el.selected = !el.selected;
    if (!el.selected) {
      const filteredDays = selectedDays.filter((s) => !(s.id === el.id));
      setSelectedDays([...filteredDays]);
      return;
    }
    setSelectedDays([...selectedDays, el]);
    return;
  }

  function sendHabit() {
    if (name === undefined || name === "" || selectedDays.length === 0) {
      alert("Falta Informações");
      return;
    }
    const body = {
      name,
      days: selectedDays.map((day) => day.id),
    };
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .post(HABITS_URL, body, config)
      .then((res) => {
        setShowCard(false);
        setLoading(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }

  return (
    <Container>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nome do hábito"
        disabled={loading}
        required
        data-identifier="input-habit-name"
      />
      <ContainerButton disabled={loading}>
        {botoes.map((el) => (
          <ClickButtons
            cor={
              selectedDays.map((day) => day.id).includes(el.id)
                ? "#CFCFCF"
                : "#fff"
            }
            corText={
              !selectedDays.map((day) => day.id).includes(el.id)
                ? "#CFCFCF"
                : "#fff"
            }
            onClick={() => handleClick(el)}
          >
            {el.name}
          </ClickButtons>
        ))}
      </ContainerButton>
      <SectionButtons>
        <span
          data-identifier="cancel-habit-create-btn"
          onClick={() => setShowCard(false)}
        >
          Cancelar
        </span>

        <button data-identifier="save-habit-create-btn" onClick={sendHabit}>
          {!loading ? (
            "Salvar"
          ) : (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </button>
      </SectionButtons>
    </Container>
  );
}

const Container = styled.div`
  height: 180px;
  width: auto;
  border-radius: 5px;
  background-color: #fff;
  padding: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Lexend Deca";
  input {
    padding-left: 10px;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    color: #666666;

    ::placeholder {
      font-family: "Lexend Deca";
      font-size: 20px;
      font-weight: 400;
      color: #dbdbdb;
    }
  }
`;
const SectionButtons = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Lexend Deca";
  span {
    font-size: 16px;
    font-weight: 400;
    color: #52b6ff;
    margin-right: 23px;
    cursor: pointer;
  }
  button {
    height: 35px;
    width: 84px;
    background-color: #52b6ff;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    border: none;
    font-family: "Lexend Deca";
    font-size: 16px;
    font-weight: 400;
  }
`;
const ContainerButton = styled.div`
  height: 35px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ClickButtons = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  color: ${(props) => props.corText};
  font-family: "Lexend Deca";
  font-size: 20px;
  font-weight: 400;
  margin-right: 5px;
  background-color: ${(props) => props.cor};
  border: 1px solid #d4d4d4;
`;
