import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./components/context/AuthProvider.jsx";
import { PersonProvider } from "./components/context/PersonContext.jsx"; // Use PersonProvider here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonProvider> {/* Use PersonProvider */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </PersonProvider>
  </StrictMode>
);
