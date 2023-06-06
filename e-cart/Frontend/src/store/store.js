import rootReducer from "./reducer";
import rootSaga from "./saga";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
