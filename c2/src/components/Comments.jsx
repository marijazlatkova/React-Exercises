//* props e podatocen tip objekt zatoa mozeme da go destrukturirame

export const Comments = ({ hasComments, longComment }) => {
  console.log(hasComments);
  console.log(longComment);
  //! uslovno renderiranje
  return (
    <div id="comments">
      {hasComments === true ? <h2>Comments:</h2> : <p>No comments here</p>}
      {longComment === true && (
        <h4>We have a long comment present in this file</h4>
      )}
    </div>
  );
};
