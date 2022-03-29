import React, { useState } from "react";
import { Header, Sidebar } from "../index";
import "./mainLayout.css";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="layout-header">
        <Header setOpen={setOpen} open={open} />
      </section>
      <section className="layout-main">
        <div className={`${open ? "sm-side" : "sm-side-close"}`}>
          <Sidebar />
        </div>
        <div className="layout_child">{children}</div>
      </section>
    </div>
  );
};

export const WithMainInvestorLayout = (Component) => {
  return (props) => {
    return (
      <>
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      </>
    );
  };
};
