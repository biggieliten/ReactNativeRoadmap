import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import * as SecureStore from "expo-secure-store";

type AuthContextType = {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
  userToken: string | null;
  isLoading: boolean;
  isSignout: boolean;
};

export const AuthContext = createContext<AuthContextType>(null as any);

type AuthProps = {
  children: ReactNode;
};

export const AuthenticationProvider = ({ children }: AuthProps) => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: any; token: any }) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            userToken: action.token,
            isSignout: false,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            userToken: null,
            isSignout: true,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        console.error("Error failed to load token: " + e);
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        const token = "dummy-auth";
        dispatch({ type: "SIGN_IN", token: token });
      },
      signOut: () =>
        dispatch({
          type: "SIGN_OUT",
          token: undefined,
        }),
      signUp: async (data: any) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth" });
      },
      userToken: state.userToken,
      isLoading: state.isLoading,
      isSignout: state.isSignout,
    }),
    [state.userToken, state.isLoading, state.isSignout]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
