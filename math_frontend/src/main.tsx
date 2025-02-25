import React from "react";
import ReactDOM from "react-dom/client";
import { MathJaxContext } from "better-react-mathjax";
import { RouterProvider } from "react-router";
import router from "./routing/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MathJaxContext>
          <RouterProvider router={router} />
        </MathJaxContext>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
