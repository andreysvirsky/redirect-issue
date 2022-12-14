import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Header } from "../components";

export const MainLayout = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
