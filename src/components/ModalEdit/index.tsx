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
  setEditFunctionIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  editClient: (id: string, user: IUser) => void;
  whichUserShouldUpdate: string;
}

export function ModalEdit({
  setEditFunctionIsEnabled,
  editClient,
  whichUserShouldUpdate
}: IModalProps) {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");

  function handleUpdateInformationUser(event: FormEvent) {
    event.preventDefault();

    if (newName === "" || newEmail === "" || newAddress === "") {
      return;
    } else {
      editClient(whichUserShouldUpdate, {
        name: newName,
        email: newEmail,
        address: newAddress
      });

      setEditFunctionIsEnabled(false);
    }
  }

  return (
    <>
      <Container>
        <Box>
          <strong>Atualizar dados do cliente</strong>

          <form onSubmit={handleUpdateInformationUser}>
            <div className="field">
              <label className="sr-only" htmlFor="name">
                Nome do cliente
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome do cliente"
                value={newName}
                onChange={event => setNewName(event.target.value)}
                autoFocus
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
                value={newEmail}
                onChange={event => setNewEmail(event.target.value)}
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
                value={newAddress}
                onChange={event => setNewAddress(event.target.value)}
                required
              />
            </div>

            <footer>
              <button onClick={() => setEditFunctionIsEnabled(false)}>
                Cancelar
              </button>
              <button>Atualizar</button>
            </footer>
          </form>
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
}
