import React, { useState } from "react";
import { Header, Sidebar , DashSidebar } from "../index";
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
        <div className="layout-child">{children}</div>
      </section>
    </div>
  );
};

export const WithMainLayout = (Component) => {
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

export const DashboardLayout = ({children}) =>{
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="layout-header">
        <Header setOpen={setOpen} open={open} />
      </section>
      <section className="layout-main">
        <div className={`${open ? "sm-side" : "sm-side-close"}`}>
          <DashSidebar />
        </div>
        <div className="layout-child">{children}</div>
      </section>
    </div>
  );
}

export const WithDashboardLayout = (Component) => {
  return (props) => {
    return (
      <>
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      </>
    );
  };
};