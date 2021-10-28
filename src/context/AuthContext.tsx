import { createContext, ReactNode, useContext, useState } from "react";
import { auth, firestore } from "../services/firebase";
import { IUser } from "../types/User";

interface IAuthContextProps {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
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
  const [user, setUser] = useState({} as IUser);

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

      setUser({
        name: name,
        email: email,
        password: password
      });
    } catch (error) {
      if (error) console.log("algo deu errado");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        createUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
