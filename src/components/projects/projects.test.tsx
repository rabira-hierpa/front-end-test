import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Projects from "./projects";

describe("Projects component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("displays a loading message while fetching data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    render(<Projects />);

    expect(screen.getByTestId("projects")).toHaveTextContent("Loading");

    await waitFor(() =>
      expect(screen.queryByTestId("loading-message")).not.toBeInTheDocument()
    );
  });

  it("displays an error message when there is an error fetching data", async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch data"));
    render(<Projects />);

    expect(screen.getByTestId("project-error-message")).toHaveTextContent(
      "Failed to fetch data"
    );
  });
});
