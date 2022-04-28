import React, { useState, useMemo , useEffect, useCallback } from "react";
import { Header, Sidebar } from "../index";
import "./mainLayout.css";
import { useParams } from 'react-router-dom';
import routes from '../../routes/routes';
import { useAuth } from '../../hooks/useAuth';
import { getRole } from '../../utils/helpers';

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

// export const StartupDashboardMain = () =>{
 

//     return (
//      <DashboardPage {...{  type: "startup" }} />
//     )
//   }
//   export const DashboardPage = ({ type}) =>{
//     const { path } = useParams();
//     // Your route import 
//     const routeArray = useMemo (() => routes.filter(r => r.type === type) ,[type]);
//     const  Component = useMemo ( () => routeArray.find(r => r.path.replace(`/${type}/`, "") === path).component,[routeArray, path , type])
//     return <Component />
//   }
