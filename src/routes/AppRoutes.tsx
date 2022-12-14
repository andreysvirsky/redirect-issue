import type { FC } from "react";

import { Route, Routes } from "react-router-dom";

import { HOME_ROUTE, PUBLIC_ROUTE, PROTECTED_ROUTE } from "../constants";
import { HomePage, PublicPage, ProtectedPage } from "../pages";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<HomePage />} />
      <Route path={PUBLIC_ROUTE} element={<PublicPage />} />
      <Route path={PROTECTED_ROUTE} element={<ProtectedPage />} />
    </Routes>
  );
};
