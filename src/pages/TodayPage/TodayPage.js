import Footer from "../../components/Footer/Footer";
import { HabitsBack } from "../../components/StyledComponents/HabitsBack";
import NavBar from "../../components/NavBar/NavBar";
import { Main } from "../../components/StyledComponents/Main";

export default function TodayPage() {
  return (
    <HabitsBack>
      <NavBar />
      <Main>
        <>Hello world</>
      </Main>
      <Footer />
    </HabitsBack>
  );
}
