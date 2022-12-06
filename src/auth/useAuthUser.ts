import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchMockData } from "../helpers/fetchMockData";

type StateType = {
  isAuthUserLoading: boolean;
  authUserError: Error | null;
  authUserName: string | null;
};

const initialState: StateType = {
  isAuthUserLoading: false,
  authUserError: null,
  authUserName: null,
};

export function useAuthUser() {
  const [{ isAuthUserLoading, authUserError, authUserName }, setAuthUserState] =
    useState<StateType>(initialState);
  const {
    user,
    getAccessTokenSilently,
    isLoading: isAuth0Loading,
    error: auth0Error,
    logout,
  } = useAuth0();
  const userId = user?.sub;
  const sessionToken = localStorage.getItem("session");

  const getUserData = async () => {
    try {
      setAuthUserState((prevState) => ({
        ...prevState,
        isAuthUserLoading: true,
      }));
      const { username } = await fetchMockData();
      setAuthUserState({
        isAuthUserLoading: false,
        authUserError: null,
        authUserName: username,
      });
    } catch (error) {
      setAuthUserState({
        isAuthUserLoading: false,
        authUserError: error as Error,
        authUserName: null,
      });
    }
  };

  useEffect(() => {
    if (!sessionToken) {
      getAccessTokenSilently().then((auth0Token) =>
        localStorage.setItem("session", auth0Token)
      );
    }
  }, [sessionToken]);

  useEffect(() => {
    if (userId && !isAuthUserLoading && sessionToken) {
      getUserData();
    }
  }, [userId, sessionToken]);

  return {
    isUserLoading: isAuth0Loading || isAuthUserLoading,
    error: auth0Error || authUserError,
    username: authUserName,
    logout,
  };
}
