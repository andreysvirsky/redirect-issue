import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import type { PropsWithChildren } from "react";
import type { AppState, Auth0ProviderOptions } from "@auth0/auth0-react";

export const WithAuth0 = ({ children }: PropsWithChildren) => {
  const Auth0ProviderWithRedirectCallback = ({
    children,
    ...props
  }: PropsWithChildren<Auth0ProviderOptions>) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState?: AppState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    };

    return (
      <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
        {children}
      </Auth0Provider>
    );
  };

  return (
    <Auth0ProviderWithRedirectCallback
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={import.meta.env.VITE_AUTH_API_IDENTIFIER}
    >
      {children}
    </Auth0ProviderWithRedirectCallback>
  );
};
