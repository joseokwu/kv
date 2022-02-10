import {
  WithMainLayout,
  WithRegisterLayout,
  WithStartupRegistrationLayout,
  WithDashboardLayout,
} from '../Startupcomponents'
import {
  WithInvestorRegisterLayout,
  WithMainInvestorLayout,
} from '../components'
import {
  WithMentorMainLayout,
  WithMentorRegisterLayout,
} from '../mentorComponents'
//import {WithRegisterLayout} from '../Startupcomponents/registerLayout/RegisterLayout';
import {
  Dashboard,
  Profile,
  StartUpRegistration,
  Program,
  FundingRaising,
  StartupProfile,
} from '../Startuppages'
import { BoosterPartner } from '../Startuppages/boosterPartner/boosterPartner'
import { StartupDealRoom } from '../Startuppages/dealRoom/dealRoom'
import { EAcademy } from '../Startuppages/eAcademy/eAcademy'
import { StartupNetworking } from '../Startuppages/networking/networking'
import { StartupTodoList } from '../Startuppages/todoList/todoList'
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
} from '../Investorpages'

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
  //Notification,
  MentorEvaluation,
} from '../mentorPages'
import { MentorViewAssignment } from '../mentorPages/mentorAssignments/components/viewEvaluation/viewAssignment'

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: WithDashboardLayout(Dashboard),
    exact: true,
    protected: false,
  },
  {
    name: 'RegisterPartner',
    path: '/RegisterPartner',
    exact: true,
    component: WithInvestorRegisterLayout(PartnerRegistration),
    protected: false,
  },
  {
    name: 'RegisterInvestor',
    path: '/investor/register',
    component: WithInvestorRegisterLayout(InvestorRegistration),
    exact: true,
    protected: false,
  },
  {
    name: 'InvestorDashboard',
    path: '/investor/dashboard',
    component: WithMainInvestorLayout(InvestorDashboard),
    exact: true,
    protected: false,
  },

  {
    name: 'Pro',
    path: '/prof',
    component: WithRegisterLayout(Profile),
    exact: true,
    protected: false,
  },
  {
    name: 'ContactUs',
    path: '/support',
    component: WithDashboardLayout(ContactUs),
    exact: true,
    protected: false,
  },
  {
    name: 'Applicants',
    path: '/applicants',
    component: WithMainInvestorLayout(Applicants),
    exact: true,
    protected: false,
  },
  {
    name: 'Notification',
    path: '/notification',
    component: WithMainInvestorLayout(Notification),
    exact: true,
    protected: false,
  },
  {
    name: 'Program',
    path: '/program',
    component: WithDashboardLayout(Program),
    exact: true,
    protected: false,
  },
  {
    name: 'TodoList',
    path: '/todolist',
    component: WithDashboardLayout(StartupTodoList),
    exact: true,
    protected: false,
  },
  {
    name: 'Networking',
    path: '/networking',
    component: WithDashboardLayout(StartupNetworking),
  },
  {
    name: 'DealRoom',
    path: '/dealroom',
    component: WithDashboardLayout(StartupDealRoom),
  },
  {
    name: 'InvestorDashboard',
    path: '/fundraising',
    component: WithDashboardLayout(FundingRaising),
    exact: true,
    protected: false,
  },
  {
    name: 'InvestorOpportunity',
    path: '/investor/opportunities',
    component: WithMainLayout(InvestorOpportunity),
    exact: true,
    protected: false,
  },
  {
    name: 'Startup-Profile',
    path: '/startup-profile',
    component: WithDashboardLayout(StartupProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'StartupRegistration',
    path: '/startupRegistration',
    component: WithStartupRegistrationLayout(StartUpRegistration),
    exact: true,
    protected: false,
  },
  {
    name: 'E-Academy',
    path: '/eacademy',
    component: WithDashboardLayout(EAcademy),
    exact: true,
    protected: false,
  },
  {
    name: 'BoosterPartner',
    path: '/boosterpartner',
    component: WithDashboardLayout(BoosterPartner),
    exact: true,
    protected: false,
  },
  {
    name: 'Opportunity',
    path: '/investor/opportunities/:id/founder',
    component: WithMainLayout(FounderProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'Opportunity',
    path: '/investor/opportunities/:id/commitment',
    component: WithMainLayout(Commitment),
    exact: true,
    protected: false,
  },
  {
    name: 'Interested',
    path: '/investor/interested',
    component: WithMainLayout(InvestorInterested),
    exact: true,
    protected: false,
  },
  {
    name: 'Interested',
    path: '/investor/interested/:id',
    component: WithMainLayout(Opportunity),
    exact: true,
    protected: false,
  },
  {
    name: 'Portfolio',
    path: '/investor/portfolio',
    component: WithMainLayout(InvestorPortfolio),
    exact: true,
    protected: false,
  },
  {
    name: 'Events',
    path: '/investor/events',
    component: WithMainLayout(InvestorEvents),
    exact: true,
    protected: false,
  },
  {
    name: 'Schedule',
    path: '/investor/schedule',
    component: WithMainLayout(InvestorSchedule),
    exact: true,
    protected: false,
  },
  {
    name: 'Schedule',
    path: '/investor/schedule-calendar',
    component: WithMainLayout(ScheduleCalendar),
    exact: true,
    protected: false,
  },
  {
    name: 'Evaluation',
    path: '/investor/evaluation',
    component: WithMainLayout(InvestorEvaluation),
    exact: true,
    protected: false,
  },
  {
    name: 'Networking',
    path: '/investor/networking',
    component: WithMainLayout(InvestorNetwork),
    exact: true,
    protected: false,
  },

  {
    name: 'DealRoom',
    path: '/investor/deal_room',
    component: WithMainLayout(InvestorDeal),
    exact: true,
    protected: false,
  },
  {
    name: 'DealRoom',
    path: '/investor/deal_room/:id',
    component: WithMainLayout(DealRoom),
    exact: true,
    protected: false,
  },
  {
    name: 'DealRoom',
    path: '/investor/deal_room/:id/:folderName',
    component: WithMainLayout(DealFolder),
    exact: true,
    protected: false,
  },

  {
    name: 'Investor profile',
    path: '/investor/profile',
    component: WithMainLayout(InvestorProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'signin',
    path: '/signin',
    exact: true,
    component: SignIn,
    protected: false,
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp,
    exact: true,
    protected: false,
  },
  {
    name: 'Notification',
    path: '/notification',
    component: WithMainLayout(Notification),
    exact: true,
    protected: false,
  },
  {
    name: 'ConfirmEmail',
    path: '/forgot/password',
    component: ConfirmEmail,
    exact: true,
    protected: false,
  },
  {
    name: 'ForgotPassword',
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true,
    protected: false,
  },
  {
    name: 'CheckMail',
    path: '/confirm/email',
    component: CheckMail,
    exact: true,
    protected: false,
  },
  {
    name: 'ResetPassword',
    path: '/reset/password',
    component: ResetPassword,
    exact: true,
    protected: false,
  },
  {
    name: 'VerifyOtp',
    path: '/verify/otp',
    component: VerifyOTP,
    exact: true,
    protected: false,
  },

  {
    name: 'Profile',
    path: '/prof',
    component: WithRegisterLayout(Profile),
    exact: true,
    protected: false,
  },
  {
    name: 'InvitePeer',
    path: '/signup/invite',
    component: WithMentorRegisterLayout(InvitePeer),
    exact: true,
    protected: false,
  },

  // Mentor Routes Starts Here
  {
    name: 'MentorDashboard',
    path: '/mentor/dashboard',
    component: WithMentorMainLayout(MentorDashboard),
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
]

export default routes
