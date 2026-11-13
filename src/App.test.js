import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import StoreContextProvider from "./context/StoreContext";

test("renders the home page inside the application providers", () => {
  render(
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  );

  expect(
    screen.getByRole("heading", { name: /order your favourite food here/i })
  ).toBeInTheDocument();
});

test("renders the main navigation and cart route link", () => {
  render(
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  );

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "" })).toBeInTheDocument();
});
