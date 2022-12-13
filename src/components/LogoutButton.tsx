import { useAuth0 } from "@auth0/auth0-react";
import type { MouseEventHandler } from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const logoutHandler: MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.removeItem("access-token");
    logout({ returnTo: window.location.origin });
  };

  return <button onClick={logoutHandler}>Log Out</button>;
};
