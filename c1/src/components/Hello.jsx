//! Koga se raboti za klasni komponenti import React from "react" e mandatory
import React from "react";
import { Goodbye } from "./Goodbye";

//? vaka se kreira edna klasna komponenta
//* class zatoa sto e klasna komponenta
//? render() e bulid in funkcija za klasni komponenti
//* na funkionalnite komponenti ne raboti render()

export class Hello extends React.Component {
  render() {
    return (
      //* prazniot tag e react fragment
      <>
        <p style={{ color: "red", backgroundColor: "lightblue", border: 1 }}>
          This is a class component example!
        </p>
        <Goodbye />
      </>
    );
  }
}

//! Domasna
//? sami da si kreirame proekt i da kreirame sami 3-4 komponenti so bilo kakvi html tagovi
