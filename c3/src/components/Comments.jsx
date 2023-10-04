import PropTypes from "prop-types";

//! uslovno renderiranje
export const Comments = ({ listOfComments, cifra }) => {
  console.log(listOfComments);
  console.log(cifra);
  return (
    <div id="comments">
      {listOfComments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.author === "Marija" ? (
              <h3>Author: {comment.author}</h3>
            ) : (
              <p>No author known</p>
            )}
            <p style={{ color: comment.author === "Petar" ? "blue" : "" }}>
              Comment: {comment.content}
            </p>
            <p>{cifra}</p>
          </div>
        );
      })}
    </div>
  );
};

Comments.propTypes = {
  listOfComments: PropTypes.arrayOf(PropTypes.object),
  cifra: PropTypes.number.isRequired,
};
