import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./app/route.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom"; // <-- from react-router-dom, not react-router
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}> 
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </Provider>
);
