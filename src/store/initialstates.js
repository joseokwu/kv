export const INIT_STATE = {
  authenticated: false,
  user: null,
  error: false,
  loading: false,
  roles: [],
  signUpStatus: 'startup',
  username: '',
};

export const INIT_STATE_BUSINESS = {
  loading: false,
  showPage: 'Overview',
  dash_view: null,
  workExperience: [],
  workExperienceCoFounder: [],
  education: [],
  educationCoFounder: [],
  fundraising: {
    fundAsk: {},
    fundUtilization: {},
    capTable: {},
    previousRound: {},
    finalProjection: {},
  },
  alert: {
    success: false,
    message: null,
    autoClose: false,
    action: false,
  },
  path: 1,
  
};
