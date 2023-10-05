import PropTypes from "prop-types";

export const Todos = ({ listOfTodos, markTodoAsDone }) => {
  return (
    <div>
      <ol>
        {listOfTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <input
                type="checkbox"
                value={todo.done}
                checked={todo.done}
                onChange={(e) => markTodoAsDone(todo)}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

Todos.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object),
  markTodoAsDone: PropTypes.func,
};
