import React from "react";
import { IProject } from "../../utils/types/project-types";

const ProjectCard: React.FC<IProject> = (project) => {
  return (
    <div className="flex flex-col py-5">
      <div className="flex flex-row justify-between">
        <div>{project.name}</div>
        <div className="flex flex-row justify-between space-x-5">
          <div className="space-x-2">
            <span>{project.star_count}</span>
            <span>{project.forks_count}</span>
          </div>
          <div>{new Date(project.last_activity_at).toDateString()}</div>
        </div>
      </div>
      <hr className="b-1" />
    </div>
  );
};

export default ProjectCard;
