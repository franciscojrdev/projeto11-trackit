import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Habits from "./pages/HabitsPage/Habits";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import TodayPage from "./pages/TodayPage/TodayPage";
import { TrackProvider } from "./TrackContext";

function App() {
  return (
    <TrackProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={< HistoryPage/>} />
        </Routes>
      </BrowserRouter>
    </TrackProvider>
  );
}

export default App;
