import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@MyAuth:user");
      const storagedToken = await AsyncStorage.getItem("@MyAuth:token");

      if (storagedToken && storagedUser) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem("@MyAuth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@MyAuth:token", response.token);
  }

  async function signOut() {
    AsyncStorage.clear().then(() => setUser(null));
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//export default AuthContext, porém abaixo é a forma resumida, vc ja exporta o context como um hook

//criando um proprio hook
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
