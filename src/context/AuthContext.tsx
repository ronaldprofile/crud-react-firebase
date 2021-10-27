import { createContext, ReactNode, useContext } from "react";
import { useHistory } from "react-router";
import { auth, firestore } from "../services/firebase";

interface IAuthContextProps {
  createUser: ({ name, email, password }: ICreateUser) => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export const AuthContext = createContext({} as IAuthContextProps);

export function AuthProvider({ children }: IAuthProviderProps) {
  const history = useHistory();

  async function createUser({ name, email, password }: ICreateUser) {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const idUser = response.user?.uid;

      const users = firestore.collection("users");
      users.doc(idUser).set({
        name: name,
        email: email,
        password: password
      });
    } catch (error) {
      if (error) console.log("algo deu errado");
    }
  }

  return (
    <AuthContext.Provider value={{ createUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
