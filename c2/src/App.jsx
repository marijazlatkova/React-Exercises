//? koga stavame export na importiranje go imortirame so {} curly brqckets
//* export default App -> dokolku e vaka togas go importirame bez zagradi

import { Comments } from "./components/Comments";
import { Hello } from "./components/Hello";
import { Student } from "./components/Student";
import { StudentClass } from "./components/StudentClass";
import { FruitList } from "./components/fruitList";

let ime = "Nikola";
let prezime = "Nikolovski";
let age = 27;
let student = {
  name: "Ivan",
  address: "Skopje",
  college: "UKIM",
  index: 141088,
};

//* boolean promenlivite ne se prikazuvaat na ekran, se prekazuvaat vo konzola
let hasComments = true;

var listaNaOvoshja = ["apple", "orange", "banana"];

export function App() {
  return (
    <div>
      <FruitList listaNaOvoshja={listaNaOvoshja} />
      <Hello name="Marija" lastName="Zlatkova" />
      <h3>Some Content</h3>
      <Hello name={ime} lastName={prezime} age={age} />
      <hr />
      <Student student={student} />
      <hr />
      <StudentClass student={student} />
      <hr />
      <Comments hasComments={hasComments} longComment={true} />
    </div>
  );
}
