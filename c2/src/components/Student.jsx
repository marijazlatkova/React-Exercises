//! Props allows you to pass data from a parent component to a child component.

export const Student = (props) => {
  console.log(props);
  return (
    <div id="student">
      <h3>Student:</h3>
      <p>Name: {props.student.name}</p>
      <p>Address: {props.student.address}</p>
      <p>College: {props.student.college}</p>
      <p>Index: {props.student.index}</p>
    </div>
  );
};
