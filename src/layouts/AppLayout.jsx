import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const AppLayout = ({ children, renderBg }) => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Header renderBg={renderBg} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
