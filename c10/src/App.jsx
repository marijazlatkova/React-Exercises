//! Redux
//? alatka za menadziranje na state
//* najcesto se koristi vo React
//! voobicaeno se koristi za pogolemi aplikacii, koga imame nekolku komponenti dovolen e i lokalen state
//? Redux go pravi statot predvidliv, bidejki ima predvidliva sintaksa

// import Hello from "./components/Hello";
import { HelloFunc } from "./components/HelloFunc";

export const App = () => {
  return (
    <div id="app">
      <h1>App</h1>
      <HelloFunc />
    </div>
  );
};
