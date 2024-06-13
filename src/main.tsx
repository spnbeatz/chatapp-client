import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { NextProvider } from "./provider.tsx";
import { AuthProvider } from "./context/authProvider.tsx";
import "@/styles/globals.css";
import { AuthScreen } from "./auth/AuthScreen.tsx";
import { Provider } from 'react-redux';
import store from "./redux/store.ts";
import "./config/i18next.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextProvider>
        <AuthProvider fallback={<AuthScreen/>}>
          <Provider store={store}>
            <App />
          </Provider>
        </AuthProvider>
      </NextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
