import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import PatternButton from "../../components/StyledComponents/Button";
import { ThreeDots } from "react-loader-spinner";
import { LOGIN_URL } from "../../constants/urls";
import { useContext } from "react";
import TrackContext from "../../TrackContext";
import axios from "axios";

export default function LoginPage() {

  const {setUser} = useContext(TrackContext);

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function login(e) {
    e.preventDefault();

    axios
      .post(LOGIN_URL, form)
      .then((res) => {
          console.log(res.data);
          setLoading(true);
          navigate("/habitos")
          setUser(res.data)
      })
      .catch((err) => {
          console.log(err.response.data.message);
          setLoading(false);
      });
  }
  return (
    <ContainerApp>
      <img src={logo} alt="logo" />
      <Form onSubmit={login}>
        <input
          name="email"
          value={form.email}
          onChange={handleForm}
          type="email"
          placeholder="email"
          disabled={loading}
          required
        />
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          disabled={loading}
          required
        />
        <PatternButton disabled={loading}>
          {!loading ? (
            "Entrar"
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
        </PatternButton>
      </Form>
      <Title>
        <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
      </Title>
    </ContainerApp>
  );
}

export const ContainerApp = styled.div`
  font-family: "Lexend Deca";
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 35px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 36px;
  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    outline: 0;
    margin-bottom: 5px;
    padding-left: 10px;

    font-size: 20px;
    font-weight: 400;
    color: gray;

    ::placeholder {
      font-size: 20px;
      font-weight: 400;
      color: #dbdbdb;
    }
  }
`;
export const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: #52b6ff;
  margin-top: 25px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;
