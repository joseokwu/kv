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
    path: 4,
  },
  {
    title: "Fundraising",
    activator: "fundraising",
    path: 5,
  },
];

export const mentorRoutes = [
  {
    title: "Personal Details",
    hash: "personal_details",
    path: 1,
  },
  {
    title: "Work Experience",
    hash: "work_experience",
    path: 2,
  },
  {
    title: "Area of interest / skills",
    hash: "area_of_interest",
    path: 3,
  },
  {
    title: "Consultant Offerings",
    hash: "consulting",
    path: 4,
  },
  {
    title: "Assistant Info",
    hash: "assistant_info",
    path: 5,
  },
];

export const investorRoutes = [
  {
    title: "Personal Details",
    hash: "details",
    path: 1,
  },
  {
    title: "Investor Details",
    hash: "investor",
    path: 2,
  },
  {
    title: "Investment Approach",
    hash: "approach",
    path: 3,
  },
  {
    title: "Portfolio",
    hash: "portfolio",
    path: 4,
  },
];

export const boosterPartnerRoutes = [
  {
    title: "Partner Details",
    hash: "details",
    path: 1,
  },
  {
    title: "Our Offerings",
    hash: "offerings",
    path: 2,
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
    activator: "boosterpartner",
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
    title: "E-Academy",
    activator: "e-academy",
    path: "/startup/e-academy",
    icon: event,
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
