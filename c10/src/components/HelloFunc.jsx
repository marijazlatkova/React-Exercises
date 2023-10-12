import { useEffect } from "react";
import { sayGoodbye, sayHello } from "../actions/SayHelloActions";
import { useSelector, useDispatch } from "react-redux";

export const HelloFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.SayHelloReducer.greeting);
  const goodbye = useSelector((state) => state.SayHelloReducer.goodbye);

  useEffect(() => {
    dispatch(sayHello());
    dispatch(sayGoodbye());
  }, [dispatch]);

  return (
    <div id="hello-func">
      <h2>{greeting}</h2>
      <h2>{goodbye}</h2>
    </div>
  );
};
