import { WithMainLayout, WithRegisterLayout,
  WithStartupRegistrationLayout , WithDashboardLayout
} from "../Startupcomponents";
import {WithInvestorRegisterLayout, WithMainInvestorLayout } from '../components';
//import {WithRegisterLayout} from '../Startupcomponents/registerLayout/RegisterLayout';
import {
  Dashboard,
  Profile,
  StartUpRegistration,
  Program,
  FundingRaising
} from "../Startuppages";
import { BoosterPartner } from "../Startuppages/boosterPartner/boosterPartner";
import { StartupDealRoom } from "../Startuppages/dealRoom/dealRoom";
import { EAcademy } from "../Startuppages/eAcademy/eAcademy";
import { StartupNetworking } from "../Startuppages/networking/networking";
import { StartupTodoList } from "../Startuppages/todoList/todoList";
import {

  BoosterDashboard,
  PartnerRegistration,
  BoosterProfile,
  Applicants,
  ContactUs,
  Notification,
  InvestorRegistration,
  InvestorDashboard,
  InvestorOpportunity,
  Opportunity,
  InvestorInterested,
  InvestorPortfolio,
  InvestorEvents,
  InvestorSchedule,
  InvestorEvaluation,
  InvestorNetwork,
  InvestorDeal,
  FounderProfile,
  Commitment,
  DealRoom,
  DealFolder,
  ScheduleCalendar,
  InvestorProfile,
} from "../Investorpages"; 

const routes = [

  {
    name: "Dashboard",
    path: "/",
    component: WithDashboardLayout(Dashboard),
    exact: true,
    protected: false,
  },
  {
    name: "RegisterPartner",
    path: "/RegisterPartner",
    exact: true,
    component: WithInvestorRegisterLayout(PartnerRegistration),
    protected: false,
  },
  {
    name: "RegisterInvestor",
    path: "/investor/register",
    component: WithInvestorRegisterLayout(InvestorRegistration),
    exact: true,
    protected: false,
  },
  {
    name: "InvestorDashboard",
    path: "/investor/dashboard",
    component: WithMainInvestorLayout(InvestorDashboard),
    exact: true,
    protected: false,
  },

  {
    name: "Pro",
    path: "/prof",
    component: WithRegisterLayout(Profile),
    exact: true,
    protected: false,
  },
  {
    name: "ContactUs",
    path: "/support",
    component: WithDashboardLayout(ContactUs),
    exact: true,
    protected: false,
  },
  {
    name: "Applicants",
    path: "/applicants",
    component: WithMainInvestorLayout(Applicants),
    exact: true,
    protected: false,
  },
  {
    name: "Notification",
    path: "/notification",
    component: WithMainInvestorLayout(Notification),
    exact: true,
    protected: false,
  },
  {
    name: "Program",
    path: "/program",
    component: WithDashboardLayout(Program),
    exact: true,
    protected: false,
  },
  {
    name: "TodoList",
    path: "/todolist",
    component: WithDashboardLayout(StartupTodoList),
    exact: true,
    protected: false,
  },
  {
    name: "Networking",
    path: "/networking",
    component: WithDashboardLayout(StartupNetworking),
  },
  {
    name: "DealRoom",
    path: "/dealroom",
    component: WithDashboardLayout(StartupDealRoom),
  },
  {
    name: "InvestorDashboard",
    path: "/fundraising",
    component: WithDashboardLayout(FundingRaising),
    exact: true,
    protected: false,
  },
  {
    name: "InvestorOpportunity",
    path: "/investor/opportunities",
    component: WithMainLayout(InvestorOpportunity),
    exact: true,
    protected: false,
  },
  {
    name: "Profile",
    path: "/profile",
    component: WithDashboardLayout(Opportunity),
    exact: true,
    protected: false,
  },
  {
    name: "StartupRegistration",
    path: "/startupRegistration",
    component: WithStartupRegistrationLayout(StartUpRegistration),
    exact: true,
    protected: false,
  },
  {
    name: "E-Academy",
    path: "/eacademy",
    component: WithDashboardLayout(EAcademy),
    exact: true,
    protected: false,
  },
  {
    name: "BoosterPartner",
    path: "/boosterpartner",
    component: WithDashboardLayout(BoosterPartner),
    exact: true,
    protected: false,
  },
  {
    name: "Opportunity",
    path: "/investor/opportunities/:id/founder",
    component: WithMainLayout(FounderProfile),
    exact: true,
    protected: false,
  },
  {
    name: "Opportunity",
    path: "/investor/opportunities/:id/commitment",
    component: WithMainLayout(Commitment),
    exact: true,
    protected: false,
  },
  {
    name: "Interested",
    path: "/investor/interested",
    component: WithMainLayout(InvestorInterested),
    exact: true,
    protected: false,
  },
  {
    name: "Interested",
    path: "/investor/interested/:id",
    component: WithMainLayout(Opportunity),
    exact: true,
    protected: false,
  },
  {
    name: "Portfolio",
    path: "/investor/portfolio",
    component: WithMainLayout(InvestorPortfolio),
    exact: true,
    protected: false,
  },
  {
    name: "Events",
    path: "/investor/events",
    component: WithMainLayout(InvestorEvents),
    exact: true,
    protected: false,
  },
  {
    name: "Schedule",
    path: "/investor/schedule",
    component: WithMainLayout(InvestorSchedule),
    exact: true,
    protected: false,
  },
  {
    name: "Schedule",
    path: "/investor/schedule-calendar",
    component: WithMainLayout(ScheduleCalendar),
    exact: true,
    protected: false,
  },
  {
    name: "Evaluation",
    path: "/investor/evaluation",
    component: WithMainLayout(InvestorEvaluation),
    exact: true,
    protected: false,
  },
  {
    name: "Networking",
    path: "/investor/networking",
    component: WithMainLayout(InvestorNetwork),
    exact: true,
    protected: false,
  },

  {
    name: "DealRoom",
    path: "/investor/deal_room",
    component: WithMainLayout(InvestorDeal),
    exact: true,
    protected: false,
  },
  {
    name: "DealRoom",
    path: "/investor/deal_room/:id",
    component: WithMainLayout(DealRoom),
    exact: true,
    protected: false,
  },
  {
    name: "DealRoom",
    path: "/investor/deal_room/:id/:folderName",
    component: WithMainLayout(DealFolder),
    exact: true,
    protected: false,
  },

  {
    name: "Investor profile",
    path: "/investor/profile",
    component: WithMainLayout(InvestorProfile),
    exact: true,
    protected: false,
  },
];

export default routes;
