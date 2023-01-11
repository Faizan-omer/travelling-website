import React from "react";
import { Header } from "../components/Header";

const AppLayout = ({ children }) => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Header />
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

export default AppLayout;
