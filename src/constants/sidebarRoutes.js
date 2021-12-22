import user from "../assets/images/sampleUserSide.png";
import dashboard from "../assets/icons/dashboard.svg";
import startup from "../assets/icons/startupApplicants.svg";
import event from "../assets/icons/eventIcon.svg";
import interested from "../assets/icons/interestedIcon.svg";
import portfolio from "../assets/icons/portfolioIcon.svg";
import schedule from "../assets/icons/scheduleIcon.svg";
import evaluation from "../assets/icons/evaluationIcon.svg";
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

   export const investorNavigators = [
    {
      title: "Dashboard",
      activator: "dashboard",
      path: "/dashboard",
      icon: dashboard,
    },
    {
      title: "Program",
      activator: "program",
      path: "/program",
      icon: startup,
    },
    {
      title: "Interested",
      activator: "interested",
      path: "/investor/interested",
      icon: interested,
    },
    {
      title: "Portfolio",
      activator: "portfolio",
      path: "/investor/portfolio",
      icon: portfolio,
    },
  
    {
      title: "Events",
      activator: "events",
      path: "/investor/events",
      icon: event,
    },
    {
      title: "Schedule",
      activator: "schedule",
      path: "/investor/schedule",
      icon: schedule,
    },
    {
      title: "Evaluation",
      activator: "evaluation",
      path: "/investor/evaluation",
      icon: evaluation,
    },
    {
      title: "Networking",
      activator: "networking",
      path: "/investor/networking",
      icon: networking,
    },
    {
      title: "Deal Room",
      activator: "deal_room",
      path: "/investor/deal_room",
      icon: networking,
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