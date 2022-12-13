import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { FC } from "react";

import { PUBLIC_ROUTE } from "../constants";

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(PUBLIC_ROUTE);
    }
  }, []);

  return <div>HomePage LOADING...</div>;
};
