import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import type { PropsWithChildren } from "react";
import type { AppState } from "@auth0/auth0-react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={import.meta.env.VITE_AUTH_API_IDENTIFIER}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
};
