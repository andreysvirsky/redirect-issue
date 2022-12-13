import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import type { FC } from "react";

import { HOME_ROUTE, PUBLIC_ROUTE, PROTECTED_ROUTE } from "../constants";
import { HomePage, PublicPage, ProtectedPage, NotFound } from "../pages";
import { AuthProvider } from "../auth/AuthProvider";
import { MainLayout } from "../layouts/MainLayout";

export const AppRouter: FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AuthProvider />}>
        <Route element={<MainLayout />}>
          <Route index path={HOME_ROUTE} element={<HomePage />} />
          <Route path={PUBLIC_ROUTE} element={<PublicPage />} />
          <Route path={PROTECTED_ROUTE} element={<ProtectedPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
