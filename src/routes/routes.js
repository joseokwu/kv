import { WithMainLayout, WithRegisterLayout } from '../components'
import {
  Dashboard,
  SignUp,
  SignIn,
  ConfirmEmail,
  ForgotPassword,
  CheckMail,
  ResetPassword,
  VerifyOTP,
  Profile,
  Congrats,
  InvitePeer,
  PersonalDetails,
  Evaluation,
  Program,
  Events,
  Assignments,
  Schedule,
  Networking,
  EvaluationViewProfile,
  ContactUs,
  CreateAssignment,
  MoreDetails,
  ViewDetails,
  DashboardProfile,
  MentorDealRoom,
  DealFolder,
  DealRoom,
  Notification,
  MentorEvaluation,
} from '../pages'
import { ViewEvaluation } from '../pages/mentorAssignments/components/viewEvaluation/viewEvaluation'
const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: WithMainLayout(Dashboard),
    exact: true,
    protected: false,
  },
  {
    name: 'Signin',
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
    name: 'ContactUS',
    path: '/support',
    component: WithMainLayout(ContactUs),
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
    name: 'Congrats',
    path: '/signup/congrats',
    component: WithRegisterLayout(Congrats),
    exact: true,
    protected: false,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: WithRegisterLayout(Profile),
    exact: true,
    protected: false,
  },
  {
    name: 'InvitePeer',
    path: '/signup/invite',
    component: WithRegisterLayout(InvitePeer),
    exact: true,
    protected: false,
  },
  {
    name: 'PersonalDetails',
    path: '/mentor/registration',
    component: WithRegisterLayout(PersonalDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'ViewDetails',
    path: '/dashboard/view',
    component: WithMainLayout(ViewDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'MentorEvaluation',
    path: '/evaluation',
    component: WithMainLayout(MentorEvaluation),
    exact: true,
    protected: false,
  },
  {
    name: 'Program',
    path: '/program',
    component: WithMainLayout(Program),
    exact: true,
    protected: false,
  },
  {
    name: 'Assignmrnts',
    path: '/assignments',
    component: WithMainLayout(Assignments),
    exact: true,
    protected: false,
  },
  {
    name: 'Events',
    path: '/events',
    component: WithMainLayout(Events),
    exact: true,
    protected: false,
  },
  {
    name: 'Schedule',
    path: '/schedule',
    component: WithMainLayout(Schedule),
    exact: true,
    protected: false,
  },
  {
    name: 'Networking',
    path: '/networking',
    component: WithMainLayout(Networking),
    exact: true,
    protected: false,
  },
  {
    name: 'DealRoom',
    path: '/deal_room',
    component: WithMainLayout(MentorDealRoom),
    exact: true,
    protected: false,
  },
  {
    name: 'DealRoom',
    path: '/deal_room/:id',
    component: WithMainLayout(DealRoom),
    exact: true,
    protected: false,
  },
  {
    name: 'DealRoom',
    path: '/deal_room/:id/:folderName',
    component: WithMainLayout(DealFolder),
    exact: true,
    protected: false,
  },
  {
    name: 'DashboardProfile',
    path: '/dashboard/founder',
    component: WithMainLayout(DashboardProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'Evaluation',
    path: '/evaluation/evaluate',
    component: WithRegisterLayout(Evaluation),
    exact: true,
    protected: false,
  },
  {
    name: 'EvaluationViewProfile',
    path: '/evaluation/view',
    component: WithMainLayout(EvaluationViewProfile),
    exact: true,
    protected: false,
  },
  {
    name: 'CreateAssignment',
    path: '/assignments/create',
    component: WithMainLayout(CreateAssignment),
    exact: true,
    protected: false,
  },
  {
    name: 'MoreDetails',
    path: '/assignments/create/details',
    component: WithMainLayout(MoreDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'ViewEvaluation',
    path: '/assignments/view',
    component: WithMainLayout(ViewEvaluation),
    exact: true,
    protected: false,
  },
]

export default routes
