import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Users } from "./components/users";
import { Provider } from "react-redux";
import store from "./store";
import { Login } from "./components/auth/Login";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Posts } from "./components/posts";
import { AlbumsWithHook } from "./components/AlbumsWithHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        >
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/albums" element={<AlbumsWithHook />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </Provider>
);
