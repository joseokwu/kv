import {
    LOGIN_FAILED,
    AUTH_START,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    USER_PROFILE,
    USER_OBJ_UPDATE,
    USER_PROFILE_FAIL,
    SET_SIGNUP_STATUS,
    LOG_OUT,
    EDIT,
    DASHBOARD_USER_PROFILE,
    DASHBOARD_LOAD,
    UPDATE_STARTUP_DATA,
    UPDATE_STARTUP_INFO,
    UPDATE_INVESTOR_DATA,
    UPDATE_INVESTOR_INFO,
    UPDATE_PROFILE_FAIL,
    UPDATE_PARTNER_INFO,
    UPDATE_MENTOR_INFO,
    UPDATE_MENTOR_DATA,
    UPDATE_STARTUP_USER_PROFILE,
    REMOVE_EDUCATION,
    REMOVE_WORK_EXPERIENCE,
} from "../../actions/actions.types";
import { INIT_STATE } from "../../initialstates";

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
            };
        case DASHBOARD_LOAD:
            return {
                ...state,
                dashboardLoad: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                // ...state,
                loading: false,
                ...action.payload,
                userType: action.payload?.userType,
                type: action.payload?.userType,
                username: action.payload?.startupname
                    ? action.payload?.startupname
                    : action.payload?.firstname,
                authenticated: true,
                email: action.payload?.email,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case USER_PROFILE:
            // if (action?.payload?.type[0] === "boosterpartner") {
            //     return {
            //         ...state,
            //         loading: false,
            //         authenticated: true,
            //         dashboardLoad: false,
            //         logo: action.payload?.logo,
            //         username: action?.payload.username,
            //         ...action?.payload,
            //         type: action?.payload?.type,
            //         signUpStatus: action?.payload?.type[0],
            //         email: action?.payload?.email,
            //     };
            // }
            // if (action?.payload?.type[0] === "startup") {
            //     return {
            //         ...state,
            //         loading: false,
            //         dashboardLoad: false,
            //         authenticated: true,
            //         user: action?.payload,
            //         ...action?.payload,
            //         startupData: action.payload.startupData,
            //         type: action?.payload?.type,
            //         signUpStatus: action?.payload?.type[0],
            //         email: action?.payload?.email,
            //     };
            // }
            // if (action?.payload?.type[0] === "investor") {
            //     return {
            //         ...state,
            //         loading: false,
            //         dashboardLoad: false,
            //         authenticated: true,
            //         user: action?.payload,
            //         ...action.payload,
            //         type: action?.payload?.type,
            //         signUpStatus: action?.payload?.type[0],
            //         email: action?.payload?.email,
            //     };
            // }
            // if (action?.payload?.type[0] === "mentor") {
            //     return {
            //         ...state,
            //         loading: false,
            //         dashboardLoad: false,
            //         authenticated: true,
            //         user: action?.payload,
            //         ...action.payload,
            //         type: action?.payload?.type,
            //         signUpStatus: action?.payload?.type[0],
            //         email: action?.payload?.email,
            //     };
            // }
            console.log({
                ...state,
                userObj: action?.payload,
                loading: false,
                dashboardLoad: false,
                authenticated: true,
                userType: action?.payload?.userType,
                signUpStatus: action?.payload?.userType,
                ...action.payload,
            });
            return {
                ...state,
                userObj: action?.payload,
                loading: false,
                dashboardLoad: false,
                authenticated: true,
                userType: action?.payload?.userType,
                signUpStatus: action?.payload?.userType,
                ...action.payload,
            };

        case USER_OBJ_UPDATE:
            console.log("inState", action?.payload);
            return {
                ...state,
                userObj: { ...state?.userObj, ...action?.payload },
                loading: false,
                dashboardLoad: false,
                authenticated: true,
                userType: action?.payload?.userType,
                signUpStatus: action?.payload?.userType,
            };
        case DASHBOARD_USER_PROFILE:
            console.log("data", action.payload);
            if (state.userType === "mentor")
                return {
                    ...state,
                    loading: false,
                    dashboardLoad: false,
                    mentorData: action?.payload.mentor_response,
                    email: action?.payload?.email,
                };
            else if (state.userType === "startup")
                return {
                    ...state,
                    loading: false,
                    dashboardLoad: false,
                    profileData: action?.payload,
                    email: action?.payload?.email,
                };
            else if (state.userType === "investor")
                return {
                    ...state,
                    loading: false,
                    dashboardLoad: false,
                    investorData: action?.payload?.data,
                    email: action?.payload?.email,
                };
            else if (state.userType === "boosterpartner")
                return {
                    ...state,
                    loading: false,
                    dashboardLoad: false,
                    partnerData: action?.payload?.data,
                    email: action?.payload?.email,
                };
            else if (state.userType === "admin")
                return {
                    ...state,
                    loading: false,
                    dashboardLoad: false,
                    adminData: action?.payload?.data,
                    email: action?.payload?.email,
                };
            else
                return {
                    ...state,
                    loading: false,
                    dashboardLoad: false,
                    profileData: action?.payload,
                    email: action?.payload?.email,
                };

            // if (action?.payload?.type[0] === "boosterpartner") {
            //     return {
            //         ...state,
            //         loading: false,
            //         dashboardLoad: false,
            //         partnerData: action?.payload,
            //         ...action?.payload,
            //         type: action?.payload?.type,
            //         signUpStatus: action?.payload?.type[0],
            //         email: action?.payload?.email,
            //     };
            // } else if (action?.payload?.type[0] === "startup") {
            //     return {
            //         ...state,
            //         loading: false,
            //         dashboardLoad: false,
            //         user: action?.payload,
            //         type: action?.payload?.type,
            //         signUpStatus: action?.payload?.type[0],
            //         email: action?.payload?.email,
            //         startupData: action.payload.startupData,
            //     };
            // } else {

            // }

            // if(action?.payload?.type[0] === 'investor'){
            //   return {
            //     ...state,
            //     dashboardLoad: false,
            //     user: action?.payload,
            //     type: action?.payload?.type,
            //     signUpStatus: action?.payload?.type[0],
            //     email: action?.payload?.email,
            //     investorData: action.payload
            //   };
            // }

            break;
        case USER_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                authenticated: false,
                dashboardLoad: false,
                user: null,
                type: "",
                profilefail: true,
            };
        case SET_SIGNUP_STATUS:
            return {
                ...state,
                signUpStatus: action.payload,
            };
        case LOG_OUT:
            return {
                state: {},
            };
        case EDIT:
            return {
                ...state,
                completedRegistration: false,
            };
        case UPDATE_STARTUP_DATA:
            return {
                ...state,
                modalClose: true,
            };
        case UPDATE_STARTUP_USER_PROFILE:
            return {
                ...state,
                profileData: { startupRes: action.payload },
            };
        case UPDATE_STARTUP_INFO:
            return {
                ...state,
                profileData: {
                    startupRes: {
                        ...state.profileData.startupRes,
                        [action.payload.property]: {
                            ...state.profileData.startupRes[
                                action.payload.property
                            ],
                            ...action.payload.value,
                        },
                    },
                },
            };

        case UPDATE_INVESTOR_DATA:
            return {
                ...state,
                investorData: action.payload,
            };

        case UPDATE_INVESTOR_INFO:
            if (action.payload.property === "portfolio") {
                return {
                    ...state,
                    investorData: {
                        ...state.investorData,
                        portfolio: [
                            ...state.investorData.portfolio,
                            { ...action.payload.value },
                        ],
                    },
                };
            }
            // console.log(action.payload.value)
            return {
                ...state,
                investorData: {
                    ...state.investorData,
                    [action.payload.property]: {
                        ...state.investorData[action.payload.property],
                        ...action.payload.value,
                    },
                },
            };
        case UPDATE_PARTNER_INFO:
            if (action.payload.property.trim() !== "") {
                return {
                    ...state,
                    partnerData: {
                        ...state.partnerData,
                        [action.payload.property]: {
                            ...state.partnerData[action.payload.property],
                            ...action.payload.value,
                        },
                    },
                };
            }

            return {
                ...state,
                partnerData: {
                    ...state.partnerData,
                    ...action.payload.value,
                },
            };
        case UPDATE_MENTOR_INFO:
            return {
                ...state,
                mentorData: {
                    ...state.mentorData,
                    [action.payload.property]: {
                        ...state.mentorData[action.payload.property],
                        ...action.payload.value,
                    },
                },
            };

        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;

        case UPDATE_MENTOR_DATA:
            return {
                ...state,
                mentorData: action.payload,
            };

        case REMOVE_WORK_EXPERIENCE:
            console.log(action.payload, "experience index");
            console.log(state, "state");

            const newState = { ...state };
            newState.profileData.startupRes.team.experience = [
                ...state?.profileData.startupRes?.team?.experience.slice(
                    0,
                    action.payload
                ),
                ...state?.profileData?.startupRes?.team?.experience.slice(
                    action.payload + 1
                ),
            ];
            return newState;

        case REMOVE_EDUCATION:
            console.log(action.payload, "education index");
            console.log(state, "state");

            const newwState = { ...state };
            newwState.profileData.startupRes.team.education = [
                ...state?.profileData.startupRes?.team?.education.slice(
                    0,
                    action.payload
                ),
                ...state?.profileData.startupRes?.team?.education.slice(
                    action.payload + 1
                ),
            ];

            return newwState;
    }
};

export default authReducer;
