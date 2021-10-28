import { useEffect, useState } from "react";
import { database } from "../../services/firebase";

import { toast, ToastContainer } from "react-toastify";
import { MdPerson, MdEmail, MdLocationOn, MdModeEdit } from "react-icons/md";
import { CgTrashEmpty } from "react-icons/cg";

import { Modal } from "../../components/ModalFormAddUser";
import { ModalEdit } from "../../components/ModalEdit";
import { Profile } from "../../components/Profile";

import "react-toastify/dist/ReactToastify.css";
import { Container, NoUsers } from "./styles";
import { useAuth } from "../../context/AuthContext";

interface IUser {
  name: string;
  email: string;
  address: string;
  id?: string;
}

export function Dashboard() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [whichUserShouldUpdate, setWhichUserShouldUpdate] = useState("");

  const [modalIsActive, setModalIsActive] = useState(false);
  const [editFunctionIsEnabled, setEditFunctionIsEnabled] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    database
      .ref()
      .child("users")
      .on("value", data => {
        const datas = data.val();
        if (datas) {
          const formatDatas = Object.entries(datas).map(([id, value]) => ({
            id,
            ...(value as any)
          }));

          if (data.val() != null) {
            setUsers([...users, ...formatDatas]);
          }
        }
      });
  }, []);

  function createNewUser(user: IUser) {
    database
      .ref()
      .child("users")
      .push(user, error => {
        if (error) console.log("Error ao criar esse cliente " + error);
      });
  }

  function deleteClient(id: string) {
    if (window.confirm("Deseja deletar esse cliente?")) {
      database
        .ref()
        .child(`users/${id}`)
        .remove(error => {
          if (error) console.log("Error ao deletar esse cliente :( " + error);
        });

      const filteredUser = users.filter(user => user.id !== id);

      setUsers(filteredUser);
      toast.success("Cliente deletado com sucesso!");
    }
  }

  function editClient(id: string, user: IUser) {
    database
      .ref()
      .child(`users/${id}`)
      .set(user, error => {
        if (error) console.log("Error ao editar esse cliente :( " + error);
      });

    toast.success("Cliente atualizado com sucesso!");
  }

  function handleModalEdit(id: string) {
    setWhichUserShouldUpdate(id);
    setEditFunctionIsEnabled(true);
  }

  return (
    <Container>
      <header>
        <h1>Avanz</h1>
        <Profile {...{ user }} />
      </header>

      <main>
        <div className="header">
          <h2>Seus clientes</h2>
          <button onClick={() => setModalIsActive(true)}>Criar cliente</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td className="name dark-blue">
                    <div>
                      <MdPerson size={24} className="svg" />
                      {user.name}
                    </div>
                  </td>

                  <td className="email dark-blue">
                    <div>
                      <MdEmail size={24} className="svg" />
                      {user.email}
                    </div>
                  </td>

                  <td className="address dark-blue">
                    <div>
                      <MdLocationOn size={24} className="svg" />
                      {user.address}
                    </div>
                  </td>

                  <td className="buttons">
                    <button
                      title="editar cliente"
                      onClick={() => handleModalEdit(`${user.id}`)}
                    >
                      <MdModeEdit size={24} />
                    </button>
                    <button
                      title="deletar cliente"
                      onClick={() => deleteClient(`${user.id}`)}
                    >
                      <CgTrashEmpty size={24} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {users.length === 0 && (
          <NoUsers>
            <h3>Opps! Não temos nenhum usuário por aqui...</h3>
            <p>comece adicionando seu primeiro cliente.</p>
          </NoUsers>
        )}
      </main>

      {modalIsActive && (
        <Modal
          {...{
            setModalIsActive,
            createNewUser,
            editClient,
            setEditFunctionIsEnabled
          }}
        />
      )}

      {editFunctionIsEnabled && (
        <ModalEdit
          {...{ editClient, setEditFunctionIsEnabled, whichUserShouldUpdate }}
        />
      )}
      <ToastContainer />
    </Container>
  );
}
