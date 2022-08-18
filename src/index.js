import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
import RequireAuth from "./components/requireAuth/RequireAuth";



const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  // <React.StrictMode>

  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <RequireAuth>
          <App />
        </RequireAuth>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
