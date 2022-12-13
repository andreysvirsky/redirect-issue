import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { Header } from "./components";

import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
