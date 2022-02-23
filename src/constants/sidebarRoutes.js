import dealroom from "../assets/icons/work_outline.svg";
import dashboard from "../assets/icons/dashboard.svg";
import startup from "../assets/icons/program.svg";
import event from "../assets/icons/eventIcon.svg";
import interested from "../assets/icons/payments.svg";
import portfolio from "../assets/icons/booter.svg";
import schedule from "../assets/icons/school.svg";
import evaluation from "../assets/icons/list_alt.svg";
import networking from "../assets/icons/networkingIcon.svg";







export const startUpRoutes = [
    {

      title: "Startup Profile",
      activator: "startup",
      path: 1,
      
    },
    {
      title: "Pitch Deck",
      activator: "pitchdeck",
      path: 2,
    
    },
    {
      title: "Team",
      activator: "team",
      path: 3,
    
    },
    {
        title: "Product",
        activator: "product",
        path:4,
      
      },
      {
        title: "Fundraising",
        activator: "fundraising",
        path:5,
      
      },
   
  ];

   export const dashboardRoutes = [
    {
      title: "Dashboard",
      activator: "dashboard",
      path: "/startup/dashboard",
      icon: dashboard,
    },
    {
      title: "Program",
      activator: "program",
      path: "/startup/program",
      icon: startup,
    },
    {
      title: "Fundraising",
      activator: "fundraising",
      path: "/startup/fundraising",
      icon: interested,
    },
    {
      title: "Booster Partners",
      activator: "boosterpartners",
      path: "/startup/boosterpartner",
      icon: portfolio,
    },
  
    {
      title: "Events",
      activator: "events",
      path: "/startup/events",
      icon: event,
    },
    {
      title:"E-academy",
      activator:"e-academy",
      path: "/startup/e-academy",
      icon: schedule,
    },
    {
      title: "Todolist",
      activator: "todolist",
      path: "/startup/todolist",
      icon: evaluation,
    },
    {
      title: "Networking",
      activator:"networking",
      path: "/startup/networking",
      icon: networking,
    },
    {
      title: "Dealroom",
      activator: "dealroom",
      path: "/startup/dealroom",
      icon: dealroom,
    },
  ];
  
    export const boosterNavigators = [
    {
      title: "Dashboard",
      activator: "dashboard",
      path: "/dashboard",
      icon: dashboard,
    },
    {
      title: "Startup Applicants",
      activator: "applicants",
      path: "/applicants",
      icon: startup,
    },
  ];