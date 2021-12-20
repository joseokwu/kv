import { WithMainLayout, WithRegisterLayout,
  WithStartupRegistrationLayout
} from "../components";
//import {WithRegisterLayout} from '../components/registerLayout/RegisterLayout';
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
  StartUpRegistration
} from "../pages";

const routes = [
  {
    name: "Signin",
    path: "/",
    exact: true,
    component: SignIn,
    protected: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: WithMainLayout(Dashboard),
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
    name: "Profile",
    path: "/profile",
    component: WithRegisterLayout(Profile),
    exact: true,
    protected: true,
  },
  {
    name: "ContactUs",
    path: "/support",
    component: WithMainLayout(ContactUs),
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
    name: "RegisterInvestor",
    path: "/investor/register",
    component: WithRegisterLayout(InvestorRegistration),
    exact: true,
    protected: false,
  },
  {
    name: "InvestorDashboard",
    path: "/investor/dashboard",
    component: WithMainLayout(InvestorDashboard),
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
    name: "Opportunity",
    path: "/investor/opportunities/:id",
    component: WithMainLayout(Opportunity),
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
];

export default routes;
