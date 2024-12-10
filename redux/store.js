import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        orders: orderReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
