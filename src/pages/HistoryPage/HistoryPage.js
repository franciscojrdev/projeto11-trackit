import Footer from "../../components/Footer/Footer";
import { HabitsBack } from "../../components/StyledComponents/HabitsBack";
import NavBar from "../../components/NavBar/NavBar";
import { Main } from "../../components/StyledComponents/Main";
import { Title } from "../TodayPage/TodayPage";
export default function HistoryPage() {
  const mock = [
    {
      day: "20/05/2021",
      habits: [
        {
          id: 3,
          name: "Acordar",
          date: "2021-05-20T12:00:00.000Z",
          weekDay: 4,
          historyId: null,
          done: false,
        },
      ],
    },
    {
      day: "19/05/2021",
      habits: [
        {
          id: 3,
          name: "Acordar",
          date: "2021-05-19T12:00:00.000Z",
          weekDay: 3,
          historyId: 626,
          done: true,
        },
        {
          id: 1,
          name: "Ler 1 capítulo do livro",
          date: "2021-05-19T12:00:00.000Z",
          weekDay: 3,
          historyId: 625,
          done: true,
        },
      ],
    },
  ];
  return (
    <HabitsBack>
      <NavBar />
      <Main>
        <Title>Histórico</Title>
      </Main>
      <Footer />
    </HabitsBack>
  );
}
