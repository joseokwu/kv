export const INIT_STATE = {
  authenticated: false,
  user: null,
  error: false,
  loading: false,
  email: null,
  logo: null,
  dashboardLoad: true,
  type: [],
  signUpStatus: "startup",
  username: "",
  completedRegistration: false,
  partnerData:{},
  startupData: {
   
  },
  mentorData: {
    personalDetail: {
      firstname: "",
      lastname: "",
      gender: "",
      designation: "",
      email: "",
      linkedin: "",
      twitter: "",
      angelist: "",
      crunchbase: "",
      whatsapp: "",
      website: "",
      skypeid: "",
      googlemeet: "",
      country: "",
      state: "",
      city: "",
      permanentaddress: "",
      mobilenumber: "",
      referral: "",
      from: "",
    },
    workExperience: {
      achievements: "",
      amountRaised: "N/A",
      companyName: "",
      currentFounder: "No",
      end: "N/A",
      start: "N/A",
      industry: "",
      position: "N/A",
    },
    areaOfInterest: {
      skills: [],
      industryExpertise: "",
      roleInKv: "",
      mentorType: "",
      roleAsFounder: "",
      mentorExperience: "",
      growthInStartup: "",
      companyInterest: "",
      criterion: "",
      additionalInfo: "",
    },
    assistantInfo: {
      assistantFirstname: "",
      assistantLastname: "",
      assistantEmail: "",
      assistantPhone: "",
      assistantAddress: "",
      assistantCountry: "",
      assistantState: "",
      assistantCity: "",
    },
    consultantOffering: {
      areaofService: [],
      serviceDescription: "",
      promotion: "",
    },
  },
};

export const INIT_STATE_BUSINESS = {
  loading: false,
  showPage: "Overview",
  dash_view: null,
  experience: [],
  workExperienceCoFounder: [],
  education: [],
  educationCoFounder: [],
  applications: [],
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
