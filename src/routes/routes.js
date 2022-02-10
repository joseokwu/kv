import {
  WithInvestorRegisterLayout,
  WithMainInvestorLayout,
} from "../components";

import {
  BoosterDashboard,
  BoosterPartnerRegistration,
  BoosterProfile,
  BoosterApplicants,
  InvestorContactUs,
  InvestorNotification,
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
  InvestorFounderProfile,
  InvestorCommitment,
  InvestorDealRoom,
  InvestorDealFolder,
  InvestorScheduleCalendar,
  InvestorProfile,
} from "../Investorpages";

const routes = [
  //Investor Routes Start
  {
    name: "Investor Dashboard",
    path: "/investor/dashboard",
    component: WithMainInvestorLayout(InvestorDashboard),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Registration",
    path: "/investor/register",
    component: WithInvestorRegisterLayout(InvestorRegistration),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Opportunities",
    path: "/investor/opportunities",
    component: WithMainInvestorLayout(InvestorOpportunity),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Opportunities",
    path: "/investor/opportunities/:id",
    component: WithMainInvestorLayout(Opportunity),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Interested",
    path: "/investor/interested",
    component: WithMainInvestorLayout(InvestorInterested),
    exact: true,
    protected: false,
  },
  {
    name: "Interested",
    path: "/investor/interested/:id",
    component: WithMainInvestorLayout(Opportunity),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Portfolio",
    path: "/investor/portfolio",
    component: WithMainInvestorLayout(InvestorPortfolio),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Profile",
    path: "/investor/profile",
    component: WithMainInvestorLayout(InvestorProfile),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Events",
    path: "/investor/events",
    component: WithMainInvestorLayout(InvestorEvents),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Evaluation",
    path: "/investor/evaluation",
    component: WithMainInvestorLayout(InvestorEvaluation),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Network",
    path: "/investor/networking",
    component: WithMainInvestorLayout(InvestorNetwork),
    exact: true,
    protected: false,
  },

  {
    name: "Investor schedule",
    path: "/investor/schedule",
    component: WithMainInvestorLayout(InvestorSchedule),
    exact: true,
    protected: false,
  },

  {
    name: "Investor founder",
    path: "/investor/founder_profile",
    component: WithMainInvestorLayout(InvestorFounderProfile),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Commitment",
    path: "/investor/opportunities/:id/commitment",
    component: WithMainInvestorLayout(InvestorCommitment),
    exact: true,
    protected: false,
  },
  {
    name: "Investor Deal",
    path: "/investor/deal_room",
    component: WithMainInvestorLayout(InvestorDeal),
    exact: true,
    protected: false,
  },
  {
    name: "Investor Deal Room",
    path: "/investor/deal_room/:id",
    component: WithMainInvestorLayout(InvestorDealRoom),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Deal Room",
    path: "/investor/deal_room/:id/:folderName",
    component: WithMainInvestorLayout(InvestorDealFolder),
    exact: true,
    protected: false,
  },
  {
    name: "Investor Schedule",
    path: "/investor/schedule-calendar",
    component: WithMainInvestorLayout(InvestorScheduleCalendar),
    exact: true,
    protected: false,
  },

  {
    name: "Investor Contact us",
    path: "/investor/support",
    component: WithMainInvestorLayout(InvestorContactUs),
    exact: true,
    protected: false,
  },

  {
    name: "Booster Contact us",
    path: "/booster/support",
    component: WithMainInvestorLayout(InvestorContactUs),
    exact: true,
    protected: false,
  },

  {
    name: "Investor  Notification",
    path: "/investor/notification",
    component: WithMainInvestorLayout(InvestorNotification),
    exact: true,
    protected: false,
  },

  {
    name: "Booster Dashboard",
    path: "/booster/dashboard",
    component: WithMainInvestorLayout(BoosterDashboard),
    exact: true,
    protected: false,
  },
  {
    name: "Booster Applicants",
    path: "/booster/applicants",
    component: WithMainInvestorLayout(BoosterApplicants),
    exact: true,
    protected: false,
  },
  {
    name: "Booster Profile",
    path: "/booster/profile",
    component: WithMainInvestorLayout(BoosterProfile),
    exact: true,
    protected: false,
  },
  {
    name: "Booster Registration",
    path: "/booster/register",
    component: WithMainInvestorLayout(BoosterPartnerRegistration),
    exact: true,
    protected: false,
  },
  //Investor Routes End
];

export default routes;
