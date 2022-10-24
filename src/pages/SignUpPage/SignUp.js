import { ContainerApp } from "../LoginPage/LoginPage";
import logo from "../../assets/images/logo.png";
import { Form } from "../LoginPage/LoginPage";
import { Title } from "../LoginPage/LoginPage";
import PatternButton from "../../components/StyledComponents/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { SIGN_UP } from "../../constants/urls";
import { LinkStyled } from "../../components/Footer/Footer";

export default function SignUp() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function createAccount(e) {
    e.preventDefault();

    axios
      .post(SIGN_UP, form)
      .then((res) => {
        console.log(res.data)
        setLoading(true)
        navigate("/")
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false)
      });
  }

  return (
    <ContainerApp>
      <img src={logo} alt="logo" />
      <Form onSubmit={createAccount}>
        <input
          name="email"
          value={form.email}
          onChange={handleForm}
          type="email"
          placeholder="email"
          disabled={loading}
          required
          data-identifier="input-email"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          disabled={loading}
          required
          data-identifier="input-password"
        />
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          type="text"
          placeholder="nome"
          disabled={loading}
          required
          data-identifier="input-name"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleForm}
          type="text"
          placeholder="foto"
          disabled={loading}
          required
          data-identifier="input-photo"
        />
        <PatternButton disabled={loading}>
          {!loading ? (
            "Cadastrar"
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
        <LinkStyled to="/">Já tem uma conta? Faça login!</LinkStyled>
      </Title>
    </ContainerApp>
  );
}


