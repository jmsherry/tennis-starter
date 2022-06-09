import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import theme from "./theme";

import ErrorBoundary from "./components/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import EditMembers from "./pages/EditMembers";
import UpdateMember from "./pages/UpdateMember";
import AddMembers from "./pages/AddMembers";
import EditCourts from "./pages/EditCourts";

const container = document.getElementById("root");
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="login" element={<Login />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="admin">
                      <Route path="members">
                        <Route index element={<EditMembers />} />
                        <Route path="add" element={<AddMembers />} />
                        <Route path="update/:id" element={<UpdateMember />} />
                        <Route path="*" element={<NotFound />} />
                      </Route>
                      <Route path="courts">
                        <Route index element={<EditCourts />} />
                        <Route path="*" element={<NotFound />} />
                      </Route>
                      <Route index element={<Admin />} />
                      <Route path="*" element={<NotFound />} />
                    </Route>
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </ErrorBoundary>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
