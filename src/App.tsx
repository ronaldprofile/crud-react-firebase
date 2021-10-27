import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { GlobalStyles } from "./styles/Global";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route path="/" exact component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <GlobalStyles />
      </BrowserRouter>
    </AuthProvider>
  );
}
