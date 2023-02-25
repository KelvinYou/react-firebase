import React, { useState, useEffect } from 'react';
import { CircularProgress } from "@mui/material";
import logo from './logo.svg';
import './App.css';
import routes from "./routes/routes";
import { auth } from "./config/firebase";
import Center from "./components/utils/Center";
import AuthChecker from "./components/auth/AuthChecker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryNavBar from './components/PrimaryNavBar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.info("User detected.");
      } else {
        console.info("No user detected");
      }
      setLoading(false);
    });
  }, []);

  if (loading)
  return (
    <Center>
      <CircularProgress />
    </Center>
  );

  return (
    <div>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <PrimaryNavBar/>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <>
                    <route.component />
                  </>
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
