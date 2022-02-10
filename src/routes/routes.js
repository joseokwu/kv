import { WithStartupDashboardLayout, 
  WithStartupRegistrationLayout ,
} from "../Startupcomponents";

import {
  StartupDashboard,
  StartupFundingRaising,
  StartUpRegistration,
  StartupProgram,
  StartupBoosterPartner,
  StartupEAcademy,
  StartupDealRoom,
  StartupTodoList,
  StartupProfile,
  StartupNetworking,
  StartupContactUs,
  StartupNotification
} from "../Startuppages";



const routes = [

  // Start-up routes start

  {
    name: "StartupDashboard",
    path: "/startup/dashboard",
    component:WithStartupDashboardLayout(StartupDashboard) ,
    exact: true,
    protected: false,
  },

  {
    name: "StartupProgram",
    path: "/startup/program",
    component:WithStartupDashboardLayout(StartupProgram) ,
    exact: true,
    protected: false,
  },  

  {
    name: "StartupFundraising",
    path: "/startup/fundraising",
    component:WithStartupDashboardLayout(StartupFundingRaising) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupBoosterpartner",
    path: "/startup/boosterpartner",
    component:WithStartupDashboardLayout(StartupBoosterPartner) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupEacademy",
    path: "/startup/e-academy",
    component:WithStartupDashboardLayout(StartupEAcademy) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupTodolist",
    path: "/startup/todolist",
    component:WithStartupDashboardLayout(StartupTodoList) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupNetworking",
    path: "/startup/networking",
    component:WithStartupDashboardLayout(StartupNetworking) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupDealroom",
    path: "/startup/dealroom",
    component:WithStartupDashboardLayout(StartupDealRoom) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupContactus",
    path: "/startup/contactus",
    component:WithStartupDashboardLayout(StartupContactUs) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupRegistration",
    path: "/startup/registration",
    component:WithStartupRegistrationLayout(StartUpRegistration) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupProfile",
    path: "/startup/profile",
    component:WithStartupDashboardLayout(StartupProfile) ,
    exact: true,
    protected: false,
  },
  {
    name: "StartupNotification",
    path: "/startup/notification",
    component:WithStartupDashboardLayout(StartupNotification) ,
    exact: true,
    protected: false,
  },
  //Start-up routes End
  

];

export default routes;
