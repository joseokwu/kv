export const INIT_STATE = {
  authenticated: false,
  user: null,
  error: false,
  loading: false,
  email:null,
  dashboardLoad:true,
  type: [],
  signUpStatus: 'startup',
  username: '',
  completedRegistration:false,
  startupData:{
    },
   
  partnerData:{

  }

};

export const INIT_STATE_BUSINESS = {
  loading: false,
  showPage: 'Overview',
  dash_view: null,
  experience: [],
  workExperienceCoFounder: [],
  education: [],
  educationCoFounder: [],
  applications:[],
  fundraising: {
    fundingAsk: {},
    fundUtilization: {},
    capTable: {},
    previousRound: {},
    financialProjection: {},
  },
  alert: {
    success: false,
    message: null,
    autoClose: false,
    action: false,
  },
  path: 1,
};
