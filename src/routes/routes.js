import { WithStartupDashboardLayout,
  WithStartupRegistrationLayout ,
} from "../Startupcomponents";
import {WithInvestorRegisterLayout, WithMainInvestorLayout } from '../components';
import {WithMentorMainLayout, WithMentorRegisterLayout } from '../mentorComponents';

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
  StartupContactUs
} from "../Startuppages";

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

import {
  MentorDashboard,
  SignUp,
  SignIn,
  ConfirmEmail,
  ForgotPassword,
  CheckMail,
  ResetPassword,
  VerifyOTP,
  //Profile,
  Congrats,
  InvitePeer,
  PersonalDetails,
  Evaluation,
  MentorProgram,
  Events,
  Assignments,
  Schedule,
  MentorNetworking,
  MentorEvaluationViewProfile,
  MentorContactUs,
  MentorCreateAssignment,
  MentorMoreDetails,
  ViewDetails,
  MentorDashboardProfile,
  MentorDealRoom,
  
  // DealFolder,
  //Notification,
  MentorEvaluation,
} from '../mentorPages';
import { MentorViewAssignment } from "../mentorPages/mentorAssignments/components/viewEvaluation/viewAssignment";



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
    path: "/startup/eacademy",
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
  //Start-up routes End
  

];

export default routes;