import { WithMainLayout, WithRegisterLayout,
  WithStartupRegistrationLayout , WithDashboardLayout
} from "../Startupcomponents";
//import {WithRegisterLayout} from '../Startupcomponents/registerLayout/RegisterLayout';
import {
  Dashboard,
  PartnerRegistration,
  SignUp,
  SignIn,
  ConfirmEmail,
  SignUpCompleted,
  ForgotPassword,
  CheckMail,
  ResetPassword,
  ForgotOTP,
  Profile,
  Applicants,
  ContactUs,
  Notification,
  InvestorRegistration,
  InvestorDashboard,
  InvestorOpportunity,
  Opportunity,
  StartUpRegistration,
  Program,
  FundingRaising
} from "../Startuppages";
import { BoosterPartner } from "../Startuppages/boosterPartner/boosterPartner";
import { StartupDealRoom } from "../Startuppages/dealRoom/dealRoom";
import { EAcademy } from "../Startuppages/eAcademy/eAcademy";
import { StartupNetworking } from "../Startuppages/networking/networking";
import { StartupTodoList } from "../Startuppages/todoList/todoList";

const routes = [
  {
    name: "Signin",
    path: "/signin",
    exact: true,
    component: SignIn,
    protected: false,
  },
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
    component: WithRegisterLayout(PartnerRegistration),
    protected: false,
  },
  {
    name: "SignUp",
    path: "/signUp",
    component: SignUp,
    exact: true,
    protected: false,
  },
  {
    name: "ConfirmEmail",
    path: "/confirm_email",
    component: ConfirmEmail,
    exact: true,
    protected: false,
  },
  {
    name: "CompleteSignUp",
    path: "/complete_signUp",
    component: SignUpCompleted,
    exact: true,
    protected: false,
  },
  {
    name: "ForgotPassword",
    path: "/forgot_password",
    component: ForgotPassword,
    exact: true,
    protected: false,
  },

  {
    name: "CheckMail",
    path: "/forgot_password/check_mail",
    component: CheckMail,
    exact: true,
    protected: false,
  },

  {
    name: "ResetPassword",
    path: "/reset_password",
    component: ResetPassword,
    exact: true,
    protected: false,
  },

  {
    name: "ForgotOtp",
    path: "/forgot_otp",
    component: ForgotOTP,
    exact: true,
    protected: false,
  },

  {
    name: "Pro",
    path: "/prof",
    component: WithRegisterLayout(Profile),
    exact: true,
    protected: true,
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
    component: WithMainLayout(Applicants),
    exact: true,
    protected: false,
  },
  {
    name: "Notification",
    path: "/notification",
    component: WithMainLayout(Notification),
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
];

export default routes;
