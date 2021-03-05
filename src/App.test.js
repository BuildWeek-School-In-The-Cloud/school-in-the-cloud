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
  const nav = screen.getByText(/sign up/i);
  const cta = screen.getByText(/ARCUE UT VEL COMMODO/i);
  const banner = screen.getByText(
    /SCHOOL IN THE CLOUD IS A PLATFORM THAT TRAINS SENIOR VOLUNTEERS TO TEACH STUDENTS IN A GROUP OR INDIVIDUAL SETTING./i
  );
  const spotlight1 = screen.getByText(/MAGNA PRIMIS LOBORTISSED ULLAMCORPER/i);
  // Assert
  expect(nav).toBeInTheDocument();
  expect(banner).toBeInTheDocument();
  expect(spotlight1).toBeInTheDocument();
  expect(cta).toBeInTheDocument();
});
