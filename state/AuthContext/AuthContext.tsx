import { createContext, useState } from "react";
import { AuthContextType } from "../../types/types";
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthenticationProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
};
