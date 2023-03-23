import React from "react";
import Header from "./header";

const AppLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
