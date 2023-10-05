//! React Router
//? v6 implementation of Router

import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { ChildComponent } from "./components/ChildComponent";
import { NotFound } from "./components/NotFound";
import { Users } from "./components/Users";

export const App = () => {
  const [users, setUsers] = useState([]);
  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getUsers();
  }, []); //componentDidMount
  return (
    <div id="app">
      <button onClick={getUsers}>Users</button>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="us" element={<ChildComponent />} />
        </Route>
        <Route path="/users" element={<Users usersList={users} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

//? v5 implementation of Router
/* <Switch>
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Switch> */
