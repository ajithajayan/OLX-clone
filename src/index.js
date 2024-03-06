import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./store/FirebaseContext";
import Firebase from "./firebase/config";
import Context from "./store/FirebaseContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
      <Context>
        <Router>
          <App />
        </Router>
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
