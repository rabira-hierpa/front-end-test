import React, { useEffect, useState } from "react";
import { IProject } from "../../utils/types/project-types";
import ProjectCard from "../project-card/project-card";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://gitlab.com/api/v4/projects")
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log({ error });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full"> Loading </div>
    );
  }
  return (
    <div className="flex flex-col px-20">
      <div className="text-center py-5">
        <h1 className="text-3xl font-bold">Explore Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          veritatis?
        </p>
      </div>
      <div className="flex justify-between py-5 ">
        <div className="space-x-3 text-md">
          <span className="underline">All</span>
          <span>Most Starred</span>
          <span>Trending</span>
        </div>
        <div className="space-x-3 text-md">
          <input
            type="text"
            placeholder="Filter by name"
            className="rounded-sm b-1"
          />
          <select placeholder="Language">
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
          </select>
          <select placeholder="Update Date">
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
