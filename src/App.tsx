import { AppRoutes } from "./routes/routes";
import { WithAuth0 } from "./auth/WithAuth0";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <WithAuth0>
      <Header />
      <AppRoutes />
    </WithAuth0>
  );
}

export default App;
