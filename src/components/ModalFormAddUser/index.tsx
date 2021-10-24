import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Container, Box } from "./styles";

interface IUser {
  name: string;
  email: string;
  address: string;
  id?: string;
}
interface IModalProps {
  setModalIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  createNewUser: (user: IUser) => void;
}

export function Modal({ setModalIsActive, createNewUser }: IModalProps) {
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [addressUser, setAddressUser] = useState("");

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (
      nameUser.trim() === "" ||
      emailUser.trim() === "" ||
      addressUser.trim() === ""
    ) {
      toast.error("Preencha todos os campos");
      return;
    } else {
      createNewUser({
        name: nameUser,
        email: emailUser,
        address: addressUser
      });
    }

    setNameUser("");
    setEmailUser("");
    setAddressUser("");

    toast.success("Cliente cadastrado com sucesso!");
    setModalIsActive(false);
  }

  return (
    <>
      <Container>
        <Box>
          <strong>Cadastro de cliente</strong>

          <form>
            <div className="field">
              <label className="sr-only" htmlFor="name">
                Nome do cliente
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome do cliente"
                autoFocus
                onChange={event => setNameUser(event.target.value)}
                required
              />
            </div>

            <div className="field">
              <label className="sr-only" htmlFor="email">
                E-mail do cliente
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                onChange={event => setEmailUser(event.target.value)}
                required
              />
            </div>

            <div className="field">
              <label className="sr-only" htmlFor="address">
                Endereço do cliente
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Endereço"
                onChange={event => setAddressUser(event.target.value)}
                required
              />
            </div>

            <footer>
              <button onClick={() => setModalIsActive(false)}>Cancelar</button>
              <button onClick={handleSubmitForm}>Cadastrar</button>
            </footer>
          </form>
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
}
