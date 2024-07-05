import { useContext, createContext } from "react";

interface LoginContextType {
  login: boolean | undefined;
  setLogin: (login: boolean) => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a AdminProvider");
  }
  return context;
}

export { useLogin, LoginContext };
