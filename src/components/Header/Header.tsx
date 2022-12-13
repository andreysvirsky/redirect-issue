import { useNavigate } from "react-router-dom";

import { useAuthUser } from "../../auth/useAuthUser";
import { AuthenticationButton } from "../AuthenticationButton";
import { HOME_ROUTE, PROTECTED_ROUTE, PUBLIC_ROUTE } from "../../constants";

import "./Header.css";

export const Header = () => {
  const { username } = useAuthUser();

  const navigate = useNavigate();

  return (
    <header className="app-header">
      <nav className="header-nav">
        <div className="menu">
          <div className="nav-logo" onClick={() => navigate(HOME_ROUTE)}>
            <strong>App</strong>
          </div>
          <div className="menu-link" onClick={() => navigate(PUBLIC_ROUTE)}>
            <span>Public page</span>
          </div>
          <div className="menu-link" onClick={() => navigate(PROTECTED_ROUTE)}>
            <span> Protected page </span>
          </div>
        </div>
        <div className="nav-profile">
          {username ? <span className="nav-userdata">{username}</span> : null}
          <AuthenticationButton />
        </div>
      </nav>
    </header>
  );
};
