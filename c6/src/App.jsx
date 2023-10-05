import { useState, useEffect } from "react";
import { Todos } from "./components/Todos";

export const App = () => {
  const [car, setCar] = useState({ model: "BMW", year: 2010 });
  const [days, setDays] = useState(["Monday", "Tuesday", "Wenesday"]);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Eat Dinner", done: false },
    { id: 3, text: "Go to sleep", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log(car);
    console.log(person);
  }, [car, person]);

  function newCar() {
    setCar({
      ...car,
      model: "Yugo",
    });
  }

  function addDays() {
    setDays(["Sunday", ...days, "Thursday", "Friday"]);
  }

  function addNewTodo() {
    if (newTodo.trim() !== "") {
      let newObject = {
        id: todos.length + 1,
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newObject]);
      setNewTodo("");
    } else {
      alert(
        "No value has been entered\nPlease enter a value submit the new Todo"
      );
    }
  }

  function markTodoAsDone(todo) {
    console.log(todo);
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id
          ? { id: item.id, text: item.text, done: !item.done }
          : item
      ),
    ]);
  }

  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} />
      <input
        type="text"
        placeholder="Enter first name"
        value={person.firstName}
        onChange={(e) => {
          setPerson({ ...person, firstName: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter last name"
        value={person.lastName}
        onChange={(e) => {
          setPerson({ ...person, lastName: e.target.value });
        }}
      />
      <h3>Car: </h3>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={newCar}>Buy new Car</button>
      <hr />
      <ul>
        {days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add days</button>
    </div>
  );
};
