import React, { useEffect, useState } from "react";
import { IProject } from "../../utils/types/project-types";
import ProjectCard from "../project-card/project-card";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://gitlab.com/api/v4/projects?order_by=last_activity_at")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        data-testid="loading-message"
        className="flex justify-center items-center h-full"
      >
        Loading
      </div>
    );
  }

  if (error) {
    return (
      <div
        data-testid="project-error-message"
        className="flex justify-center items-center h-full"
      >
        {error}
      </div>
    );
  }

  return (
    <div data-testid="projects" className="flex flex-col px-20">
      <div className="text-center py-5">
        <h1 className="text-3xl font-bold">Explore Projects</h1>
        <p>
          Discover projects, groups and snippets. Share your projects with
          others.
        </p>
      </div>
      <div className="flex justify-between py-5 ">
        <div className="hidden sm:block space-x-3 text-md">
          <span className="underline">All</span>
          <span>Most Starred</span>
          <span>Trending</span>
        </div>
        <div className="flex flex-col space-y-2  sm:flex-row sm:space-x-2 text-md">
          <input
            type="text"
            placeholder="Filter by name"
            className="rounded-sm border px-2"
          />
          <select
            value=""
            onChange={() => null}
            placeholder="Language"
            className="border p-2"
          >
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
          </select>
          <select
            value=""
            onChange={() => null}
            placeholder="Update Date"
            className="border p-2"
          >
            <option value="This week">This week</option>
            <option value="Last week">Last week</option>
          </select>
        </div>
      </div>
      <div>
        {!!projects.length &&
          projects.map((project) => {
            return (
              <React.Fragment key={project?.id}>
                <ProjectCard {...project} />
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
