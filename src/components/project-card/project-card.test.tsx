import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "./project-card";

const project = {
  id: 1,
  name: "My project",
  star_count: 10,
  forks_count: 5,
  last_activity_at: "2022-03-22T12:30:00.000Z",
};

describe("ProjectCard component", () => {
  test("renders project name, star count, forks count, and last activity date", () => {
    render(<ProjectCard {...project} />);
    const projectName = screen.getByText(project.name);
    const starCount = screen.getByText(project.star_count.toString());
    const forksCount = screen.getByText(project.forks_count.toString());
    const lastActivityDate = screen.getByText(
      new Date(project.last_activity_at).toDateString()
    );

    expect(projectName).toBeInTheDocument();
    expect(starCount).toBeInTheDocument();
    expect(forksCount).toBeInTheDocument();
    expect(lastActivityDate).toBeInTheDocument();
  });
});
