import { Route, Routes } from "react-router-dom";
import type { FC } from "react";

import { ProtectedRoute } from "./ProtectedRoute";
import { HomePage } from "../pages/HomePage";
import { ProtectedPage } from "../pages/ProtectedPage";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/protected"
        element={<ProtectedRoute component={ProtectedPage} />}
      />
    </Routes>
  );
};
