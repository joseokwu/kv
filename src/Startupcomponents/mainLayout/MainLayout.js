import React, { useState, useEffect, useCallback } from "react";
import StartUpsProvider from "../../context/startups";
import { Header, Sidebar, DashSidebar } from "../index";
import "./mainLayout.css";

export const DashboardLayout = ({ children }) => {
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
        <div className="layoutChild">{children}</div>
      </section>
    </div>
  );
};

export const WithStartupDashboardLayout = (Component) => {
  return (props) => {
    return (
      <>
        {/* <StartUpsProvider> */}
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
        {/* </StartUpsProvider> */}
      </>
    );
  };
};
