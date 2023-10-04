//? Koga se raboti za funkcionalni komponenti import React from 'react' nemora da se importira bidejki samiot vite znae deka se raboti za React proekt
//! React se bazira na komponenti, postojat:
//? Klasni komponenti
//* Funkcionalni komponenti
//? Klasnite ne se koristat vekje, cel react se ima prefrleno na funkcionalni komponenti

//* vaka se importiraat komponentite
import { Hello } from "./components/Hello";
import { Goodbye } from "./components/Goodbye";

export function App() {
  const broj = 1;
  let fraza = "string";
  var karakter = "c";
  //* sve sto ke staveme vo return toa odi na browser
  //* return mora da ima wrapper div, samo eden parent element
  return (
    <div>
      <h2>Hello from my first React App</h2>
      {/* vaka gi povikuvame komponentite */}
      <Hello />
      <Goodbye />
      <hr />
      <p>5+3</p>
      <p>{5 + 3}</p>
      <h2>Fraza: {fraza}</h2>
      <h4>Broj: {broj}</h4>
      <h6>Karakter: {karakter}</h6>
    </div>
  );
}

//! komponentata moze da se eksportira i vaka, no togas ke bide importirana bez {} curly brackets
//* export default App;
