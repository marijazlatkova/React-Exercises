import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import SayHelloReducer from "./reducers/SayHelloReducer";

const reducer = {
  SayHelloReducer: SayHelloReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
