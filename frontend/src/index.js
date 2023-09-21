import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './components/ProductContext';
import { FilterContextProvider } from "./components/FilterContext";

import { Provider } from "react-redux";


import productsReducer, { productsFetch } from "./components/slices/productsSlice";
import cartReducer, { getTotals } from "./components/slices/cartSlice";
import authReducer from "./components/slices/authSlice";
import { productsApi } from "./components/slices/productsApi";
import ordersSlice from "./components/slices/ordersSlice";
import usersSlice from "./components/slices/usersSlice";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersSlice,
    users: usersSlice,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
store.dispatch(productsFetch());
store.dispatch(getTotals());





root.render(
 
    

    <Provider store={store}>

      <AppProvider>
        <FilterContextProvider>

          <App />

        </FilterContextProvider>

      </AppProvider>
      </Provider>
     
      );

      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals();
