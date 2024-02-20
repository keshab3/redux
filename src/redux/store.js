import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import counterReducer from "./slice/counterSlice";
import productReducer from "./slice/productSlice";
// import todoReducer from "./slice/todoSlice";

export default configureStore({
    reducer: {
        userReducer: {},
        productReducer: productReducer,
        counterReducer: counterReducer,
        // todoReducer: todoReducer,
    },
    middleware: () => [thunk],
});