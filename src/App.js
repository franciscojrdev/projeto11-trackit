import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Habits from "./pages/HabitsPage/Habits";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/cadastro" element={<SignUp/>} />
        <Route path="/habito" element={<Habits/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
