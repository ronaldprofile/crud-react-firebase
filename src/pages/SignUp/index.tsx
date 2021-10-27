import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { Container } from "./styles";

export function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useAuth();

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Preencha todos os campos");
      return;
    }

    createUser({
      name,
      email,
      password
    });

    // redirecionar o user para a dashboard
    history.push("/dashboard");

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <h1>Crie sua conta na plataforma</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <label htmlFor="name-user" className="sr-only">
              Seu nome
            </label>
            <input
              type="text"
              id="name-user"
              placeholder="Seu nome"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="email-user" className="sr-only">
              Seu melhor E-mail
            </label>
            <input
              type="email"
              id="email-user"
              placeholder="Seu melhor E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password-user" className="sr-only">
              Sua senha
            </label>
            <input
              type="password"
              id="password-user"
              placeholder="Sua senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <button>Criar conta</button>
        </form>
      </div>
    </Container>
  );
}
