import { ContainerApp } from "../LoginPage/LoginPage";
import logo from "../../assets/images/logo.png";
import { Form } from "../LoginPage/LoginPage";
import { Title } from "../LoginPage/LoginPage";
import PatternButton from "../../components/StyledComponents/Button";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
export default function RegistrationPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function registration(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <ContainerApp>
      <img src={logo} alt="logo" />
      <Form onSubmit={registration}>
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
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          type="text"
          placeholder="nome"
          disabled={loading}
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleForm}
          type="text"
          placeholder="foto"
          disabled={loading}
          required
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
      <Title>Já tem uma conta? Faça login!</Title>
    </ContainerApp>
  );
}
