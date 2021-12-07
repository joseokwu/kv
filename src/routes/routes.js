import { WithMainLayout, WithRegisterLayout } from '../components'
//import {WithRegisterLayout} from '../components/registerLayout/RegisterLayout';
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
  DealRoom,
} from '../pages'
import { DashboardProfile } from '../pages/dashboardProfile/dashboardProfile'
import { ViewDetails } from '../pages/viewDetails/viewDetails'

const routes = [
  {
    name: 'Signin',
    path: '/mentor/signin',
    exact: true,
    component: SignIn,
    protected: false,
  },
  {
    name: 'Dashboard',
    path: '/mentor/dashboard',
    component: WithMainLayout(Dashboard),
    exact: true,
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
    name: 'ConfirmEmail',
    path: '/mentor/forgot/password/check/mail',
    component: ConfirmEmail,
    exact: true,
    protected: false,
  },
  {
    name: 'ForgotPassword',
    path: '/mentor/forgot/password',
    component: ForgotPassword,
    exact: true,
    protected: false,
  },

  {
    name: 'CheckMail',
    path: '/mentor/confirm/email',
    component: CheckMail,
    exact: true,
    protected: false,
  },

  {
    name: 'ResetPassword',
    path: '/mentor/reset/password',
    component: ResetPassword,
    exact: true,
    protected: false,
  },

  {
    name: 'VerifyOtp',
    path: '/mentor/verify/otp',
    component: VerifyOTP,
    exact: true,
    protected: false,
  },
  {
    name: 'Congrats',
    path: '/mentor/signup/congrats',
    component: WithRegisterLayout(Congrats),
    exact: true,
    protected: false,
  },
  {
    name: 'Profile',
    path: '/mentor/profile',
    component: WithRegisterLayout(Profile),
    exact: true,
    protected: false,
  },
  {
    name: 'InvitePeer',
    path: '/mentor/signup/invite/peer',
    component: WithRegisterLayout(InvitePeer),
    exact: true,
    protected: false,
  },
  {
    name: 'PersonalDetails',
    path: '/mentor/personal/details',
    component: WithRegisterLayout(PersonalDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'ViewDetails',
    path: '/mentor/dashboard/view/details',
    component: WithMainLayout(ViewDetails),
    exact: true,
    protected: false,
  },
  {
    name: 'Evaluation',
    path: '/mentor/evaluation',
    component: WithMainLayout(Evaluation),
    exact: true,
    protected: false,
  },
  {
    name: 'Program',
    path: '/mentor/program',
    component: WithMainLayout(Program),
    exact: true,
    protected: false,
  },
  {
    name: 'Assignmrnts',
    path: '/mentor/assignments',
    component: WithMainLayout(Assignments),
    exact: true,
    protected: false,
  },
  {
    name: 'Events',
    path: '/mentor/events',
    component: WithMainLayout(Events),
    exact: true,
    protected: false,
  },
  {
    name: 'Schedule',
    path: '/mentor/schedule',
    component: WithMainLayout(Schedule),
    exact: true,
    protected: false,
  },
  {
    name: 'Networking',
    path: '/mentor/networking',
    component: WithMainLayout(Networking),
    exact: true,
    protected: false,
  },
  {
   name: 'DealRoom',
   path: '/mentor/deal-room',
   component: WithMainLayout(DealRoom),
   exact: true,
   protected: false,
 },
 {
  name: 'DashboardProfile',
  path: '/mentor/dashboard/founder/profile',
  component: WithMainLayout(DashboardProfile),
  exact: true,
  protected: false,
},
]

export default routes
