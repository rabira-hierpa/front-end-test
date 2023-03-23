import Button from "antd/es/button";
import React, { useEffect, useState } from "react";
import ProjectCard from "./components/project-card/project-card";
import Projects from "./components/projects/projects";
import AppLayout from "./layout/app-layout";
import { IProject } from "./utils/types/project-types";

function App() {
  return (
    <AppLayout>
      <Projects />
    </AppLayout>
  );
}

export default App;
