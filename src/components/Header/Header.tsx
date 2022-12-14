import { Link } from "react-router-dom";

import { useAuthUser } from "../../auth/useAuthUser";
import { AuthenticationButton } from "../AuthenticationButton";
import { HOME_ROUTE, PROTECTED_ROUTE, PUBLIC_ROUTE } from "../../constants";

import "./Header.css";

export const Header = () => {
  const { username, isUserLoading } = useAuthUser();

  return (
    <header className="app-header">
      <nav className="header-nav">
        <div className="menu">
          <Link to={HOME_ROUTE} className="nav-logo">
            App
          </Link>
          <Link to={PUBLIC_ROUTE} className="menu-link">
            Public Page
          </Link>
          <Link to={PROTECTED_ROUTE} className="menu-link">
            Protected Page
          </Link>
        </div>
        <div className="nav-profile">
          {username ? <span className="nav-userdata">{username}</span> : null}
          {isUserLoading ? null : <AuthenticationButton />}
        </div>
      </nav>
    </header>
  );
};
