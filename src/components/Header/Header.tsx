import { useAuth0 } from "@auth0/auth0-react";
import type { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthUser } from "../../auth/useAuthUser";

import "./Header.css";

export const Header = () => {
  const { logout } = useAuth0();
  const { username } = useAuthUser();
  const navigate = useNavigate();

  const logoutHandler: MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.removeItem("session");
    logout({ returnTo: window.location.origin });
  };

  return (
    <header className="app-header">
      <nav className="header-nav">
        <div className="menu">
          <div className="nav-logo">
            <strong>App</strong>
          </div>
          <div className="menu-link">
            <span onClick={() => navigate("/protected")}>Protected page</span>
          </div>
          <div className="menu-link">
            <span onClick={() => navigate("/")}>Home page</span>
          </div>
        </div>
        {username ? (
          <div className="nav-profile">
            <span className="nav-userdata">{username}</span>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        ) : null}
      </nav>
    </header>
  );
};
