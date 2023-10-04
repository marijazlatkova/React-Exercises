export const FruitList = ({ listaNaOvoshja }) => {
  return(
    <div>
      <h2>FruitList</h2>
      <ul>
        {listaNaOvoshja.map((ovoshje, i) => {
          return(
            <li key={i}>{ovoshje}</li>
          )
        })}
      </ul>
    </div>
  )
};