import type { FC } from "react";

import { Route, Routes } from "react-router-dom";

import { HOME_ROUTE, PUBLIC_ROUTE, PROTECTED_ROUTE } from "../constants";
import { HomePage, PublicPage, ProtectedPage } from "../pages";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} index element={<HomePage />} />
      <Route path={PUBLIC_ROUTE} index element={<PublicPage />} />
      <Route path={PROTECTED_ROUTE} index element={<ProtectedPage />} />
    </Routes>
  );
};
