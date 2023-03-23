import React from "react";
import StarIconOutlined from "../../assets/icons/star-icon";
import { IProject } from "../../utils/types/project-types";

const ProjectCard: React.FC<Partial<IProject>> = (project) => {
  return (
    <div className="flex flex-col py-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div>{project.name}</div>
        <div className="flex flex-col md:flex-row justify-between space-x-5">
          <div className="flex flex-row space-x-2">
            <div className="flex space-x-2">
              <StarIconOutlined />
              <span>{project.star_count}</span>
            </div>
            <div>{project.forks_count}</div>
          </div>
          <div className="hidden md:block">
            {new Date(project.last_activity_at!).toDateString()}
          </div>
        </div>
      </div>
      <hr className="b-1" />
    </div>
  );
};

export default ProjectCard;
