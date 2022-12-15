import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function useAuthUser() {
  const {
    user,
    getAccessTokenSilently,
    isLoading,
    error,
    logout,
    isAuthenticated,
  } = useAuth0();

  useEffect(() => {
    if (getAccessTokenSilently && isAuthenticated) {
      getAccessTokenSilently({ detailedResponse: true })
        .then((response) => {
          console.log({ response });
          localStorage.setItem("access-token", response.access_token);
        })
        .catch((error) => {
          console.log({ error });
          localStorage.removeItem("access-token");
        });
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  return {
    isUserLoading: isLoading,
    error,
    username: user?.name,
    logout,
  };
}
