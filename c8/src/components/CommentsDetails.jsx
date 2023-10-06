import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const CommentsDetails = () => {
  const [commentsDetails, setCommentsDetails] = useState({});
  let { id } = useParams(); //hook sto gi zema site zadadeni parametri

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/" + id)
      .then((res) => setCommentsDetails(res.data))
      .catch((err) => alert(err.message));
  }, []);
  console.log(id);
  return (
    <div id="comments-details">
      <h2>{CommentsDetails.name}</h2>
      <h2>{CommentsDetails.email}</h2>
      <h2>{CommentsDetails.body}</h2>
    </div>
  );
};
