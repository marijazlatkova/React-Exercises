//! Zivoten ciklus na komponenta

import { useState, useEffect } from "react";
import { LifeCycleExample } from "./components/LifeCycleExample";

export function App() {
  const [promenliva, setPromenliva] = useState("Vrednost 1");

  const [inputValue, setInputValue] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [brojac, setBrojac] = useState(0);

  function HandleChangedValue(event) {
    setInputValue(event.target.value);
  }

  //* slicna sintaksa kako setTimeOut
  useEffect(() => {
    console.log("Username", username);
    console.log("Password", password);
  }, [username, password]); //* dependency array

  return (
    <div>
      <h2>App</h2>
      <LifeCycleExample />
      <p>State: {promenliva}</p>
      <button
        onClick={() => {
          setPromenliva("Nova vrednost 3");
        }}
      >
        Change me
      </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter something here"
        value={inputValue}
        onChange={HandleChangedValue}
      />
      <h3>{inputValue}</h3>
      <br />
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <h2>Counter: {brojac}</h2>
      <img
        src={
          "https://th-thumbnailer.cdn-si-edu.com/tweX68LQrE6aY4X0tzmF_gSfiYw=/800x600/filters:focal(4381x2523:4382x2524)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/e0/58/e058c2c2-b1d9-491c-abf5-973844b211a0/gettyimages-171399380.jpg"
        }
        alt="Panda"
        onClick={() => {
          setBrojac(brojac + 1);
        }}
      />
    </div>
  );
}
