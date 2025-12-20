import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/router";
import AuthProvider from "./Auth/AuthProvider";
import { ToastBar, Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster></Toaster>
                <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
