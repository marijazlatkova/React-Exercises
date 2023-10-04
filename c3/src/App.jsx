import { Car } from "./components/Car";
import { Comments } from "./components/Comments";

let comments = [
  { id: 0, author: "Marija", content: "Comment1" },
  { id: 1, author: "Dragan", content: "Comment2" },
  { id: 2, author: "Petar", content: "Comment3" },
];

let registracija = [
  { grad: { naselba: "N1", ulica: "UL1" }, oznaka: "SK-0000-AB" },
  { grad: { naselba: "N2", ulica: "UL2" }, oznaka: "GV-000-AB" },
  { grad: { naselba: "N3", ulica: "UL3" }, oznaka: "TE-0000-AB" },
];

let cars = [
  { brand: "Ford", model: "Fiesta", year: 2008, plates: registracija[0] },
  { brand: "Opel", model: "Astra", year: 2015, plates: registracija[1] },
  { brand: "VW", model: "Polo", year: 2020, plates: registracija[2] },
];

export function App() {
  return (
    <div>
      <h2>App file</h2>
      <Comments listOfComments={comments} cifra={5} />
      <Car vozila={cars} />
    </div>
  );
}
