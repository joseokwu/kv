
import {
  WithMentorMainLayout,
  WithMentorRegisterLayout,
} from '../mentorComponents'

import {
  MentorDashboard,
  SignUp,
  MentorSignIn,
  MentorConfirmEmail,
  MentorForgotPassword,
  MentorCheckMail,
  MentorResetPassword,
  MentorVerifyOTP,
  MentorProfile,
  MentorNotification,
  MentorCongrats,
  MentorInvitePeer,
  MentorPersonalDetails,
  MentorEvaluate,
  MentorProgram,
  MentorEvents,
  MentorAssignments,
  MentorSchedule,
  MentorNetworking,
  MentorEvaluationViewProfile,
  MentorContactUs,
  MentorCreateAssignment,
  MentorMoreDetails,
  MentorViewDetails,
  MentorDashboardProfile,
  MentorDealRoom,
  // DealFolder,
  MentorEvaluation,
} from '../mentorPages'
import { MentorViewAssignment } from '../mentorPages/mentorAssignments/components/viewEvaluation/viewAssignment';
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
    component:StartupNotification ,
    exact: true,
    protected: false,
  },


  //Start-up routes End
  
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
  
    // Mentor Routes Starts Here
  {
    name: 'signin',
    path: '/mentor/signin',
    exact: true,
    component: MentorSignIn,
    protected: false,
  },
  {
    name: 'SignUp',
    path: '/mentor/signup',
    component: SignUp,
    exact: true,
    protected: false,
  },
  {
    name: 'Congrats',
    path: '/mentor/signup/congrats',
    component: WithMentorRegisterLayout(MentorCongrats),
    exact: true,
    protected: false,
  },
  {
    name: 'Notification',
    path: '/mentor/notification',
    component: WithMentorMainLayout(MentorNotification),
    exact: true,
    protected: false,
  },
  {
    name: 'ConfirmEmail',
    path: '/mentor/forgot/password',
    component: MentorConfirmEmail,
    exact: true,
    protected: false,
  },
  {
    name: 'ForgotPassword',
    path: '/mentor/forgot-password',
    component: MentorForgotPassword,
    exact: true,
    protected: false,
  },
  {
    name: 'CheckMail',
    path: '/mentor/confirm/email',
    component: MentorCheckMail,
    exact: true,
    protected: false,
  },
  {
    name: 'ResetPassword',
    path: '/mentor/reset/password',
    component: MentorResetPassword,
    exact: true,
    protected: false,
  },
  {
    name: 'VerifyOtp',
    path: '/mentor/verify/otp',
    component: MentorVerifyOTP,
    exact: true,
    protected: false,
  },
  {
    name: 'InvitePeer',
    path: '/mentor/signup/invite',
    component: WithMentorRegisterLayout(MentorInvitePeer),
    exact: true,
    protected: false,
  },
  {
    name: 'MentorDashboard',
    path: '/mentor/dashboard',
    component: WithMentorMainLayout(MentorDashboard),
    exact: true,
    protected: false,
  },
  {
    name: 'MentorDashboard',
    path: '/mentor/profile',
    component: WithMentorRegisterLayout(MentorProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'PersonalDetails',
    path: '/mentor/registration',
    component: WithMentorRegisterLayout(MentorPersonalDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'ViewDetails',
    path: '/mentor/dashboard/view',
    component: WithMentorMainLayout(MentorViewDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'MentorEvaluation',
    path: '/mentor/evaluation',
    component: WithMentorMainLayout(MentorEvaluation),
    exact: true,
    protected: false,
  },
  {
    name: 'Program',
    path: '/mentor/program',
    component: WithMentorMainLayout(MentorProgram),
    exact: true,
    protected: false,
  },
  {
    name: 'Assignmrnts',
    path: '/mentor/assignments',
    component: WithMentorMainLayout(MentorAssignments),
    exact: true,
    protected: false,
  },
  {
    name: 'Events',
    path: '/mentor/events',
    component: WithMentorMainLayout(MentorEvents),
    exact: true,
    protected: false,
  },
  {
    name: 'Schedule',
    path: '/mentor/schedule',
    component: WithMentorMainLayout(MentorSchedule),
    exact: true,
    protected: false,
  },
  {
    name: 'Networking',
    path: '/mentor/networking',
    component: WithMentorMainLayout(MentorNetworking),
    exact: true,
    protected: false,
  },
  {
    name: 'DealRoom',
    path: '/mentor/dealroom',
    component: WithMentorMainLayout(MentorDealRoom),
    exact: true,
    protected: false,
  },
  // {
  //   name: 'DealRoom',
  //   path: '/mentor/deal_room/:id',
  //   component: WithMentorMainLayout(MentorDealRoom),
  //   exact: true,
  //   protected: false,
  // },
  // {
  //   name: ‘DealRoom’,
  //   path: ‘/deal_room/:id/:folderName’,
  //   component: WithMainLayout(DealFolder),
  //   exact: true,
  //   protected: false,
  // },
  {
    name: 'DashboardProfile',
    path: '/mentor/dashboard/founder',
    component: WithMentorMainLayout(MentorDashboardProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'Evaluation',
    path: '/mentor/evaluation/evaluate',
    component: WithMentorRegisterLayout(MentorEvaluate),
    exact: true,
    protected: false,
  },
  {
    name: 'EvaluationViewProfile',
    path: '/mentor/evaluation/view',
    component: WithMentorMainLayout(MentorEvaluationViewProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'CreateAssignment',
    path: '/mentor/assignments/create',
    component: WithMentorMainLayout(MentorCreateAssignment),
    exact: true,
    protected: false,
  },
  {
    name: 'MoreDetails',
    path: '/mentor/assignments/create/details',
    component: WithMentorMainLayout(MentorMoreDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'ViewAssignmnet',
    path: '/mentor/assignments/view',
    component: WithMentorMainLayout(MentorViewAssignment),
    exact: true,
    protected: false,
  },
  {
    name: 'ContactUS',
    path: '/mentor/support',
    component: WithMentorMainLayout(MentorContactUs),
    exact: true,
    protected: false,
  },

  // Mentor Routes Ends Here
  

];

export default routes;



