import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsRequest } from "../actions/CommentsActions";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.CommentsReducer.comments);
  const greshka = useSelector((state) => state.CommentsReducer.err);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, [dispatch]);

  return (
    <div id="comments">
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              <span>Name:</span>
              {comment.name}
            </p>
            <p>
              <span>Email:</span>
              {comment.email}
            </p>
            <p>
              <span>Body:</span>
              {comment.body}
            </p>
            <hr />
          </div>
        );
      })}
      {greshka && <h1>{greshka}</h1>}
    </div>
  );
};
