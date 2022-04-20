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
    startUpProfile:{
      elevatorPitch:'',
      brand:'' ,
      registrationNumber:'',
      companySize:'',
      businessSector:'',
      startupStage:'',
      acceleratorName:'',
      contactInfo:{
       registeredAddress: '',
       country:'',
       state:'',
       city:'',
       phoneNumber:'',
       companyEmail:''
      },
      socialMedia:{
        profileHandle:'',
        companyWebsite:'',
        linkedInHandle:'',
        twitterHandle:''  
      }
    },
    team:{
      experience:[],
      education:[],
      skills:[]
    }
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
