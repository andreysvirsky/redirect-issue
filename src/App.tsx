import { useAuth0 } from "@auth0/auth0-react";
import { Header } from "./components";

import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
