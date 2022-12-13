import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function useAuthUser() {
  const { user, getAccessTokenSilently, isLoading, error, logout } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently({ detailedResponse: true }).then((response) => {
      console.log({ response });
      localStorage.setItem("access-token", response.access_token);
    });
  }, []);

  return {
    isUserLoading: isLoading,
    error,
    username: user?.name,
    logout,
  };
}
