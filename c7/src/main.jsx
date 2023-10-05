//! importiranje na virtuelniot dom
import ReactDOM from "react-dom/client";

//? importiranje na glavnata komponenta na aplikacijata
import { App } from "./App.jsx";

//* importiranje na React Router
import { BrowserRouter as Router } from "react-router-dom";

//? kreiranje na nova instanca od root
const root = ReactDOM.createRoot(document.getElementById("root"));

//! renderiranje na glavnata komponenta na aplikacijata
root.render(
  <Router>
    <App />
  </Router>
);
