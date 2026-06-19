import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { TrainProvider } from "./context/TrainContext";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import { AuditProvider } from "./context/AuditContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <TrainProvider>
          <AuditProvider>
            <App />
          </AuditProvider>
        </TrainProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
