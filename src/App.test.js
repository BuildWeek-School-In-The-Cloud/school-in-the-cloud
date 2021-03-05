import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders to screen", () => {
  render(<App />);
});

test("Individual parts are rendering", () => {
  // Render
  render(<App />);
  // Act
  const menu = screen.getByText(/menu/i);
  const cta = screen.getByText(/ARCUE UT VEL COMMODO/i)
  // Assert
  expect(menu).toBeInTheDocument();
  expect(cta).toBeInTheDocument();
});
