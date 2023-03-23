import React from "react";
import Header from "./header";

const AppLayout: React.FC<any> = ({ children }) => {
  return (
    <div data-testid="app-layout" className="w-full h-full flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
