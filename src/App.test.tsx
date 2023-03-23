import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders Projects and AppLayout components", () => {
    render(<App />);
    const projectsComponent = screen.getByTestId("projects");
    const appLayoutComponent = screen.getByTestId("app-layout");

    expect(projectsComponent).toBeInTheDocument();
    expect(appLayoutComponent).toBeInTheDocument();
  });
});
