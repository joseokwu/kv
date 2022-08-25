import {
    WithMentorMainLayout,
    WithMentorSecLayout,
    WithMentorRegistrationLayout,
} from "../mentorComponents";
import { lazy } from "react";

import {
    MentorDashboard,
    SignUp,
    SignIn,
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
    NotFound,
    VerifyUserEmail,
} from "../mentorPages";

import { MentorViewAssignment } from "../mentorPages/mentorAssignments/components/viewAssignment/viewAssignment";
import {
    WithInvestorSecLayout,
    WithInvestorRegistrationLayout,
    WithBoosterPartnerRegistrationLayout,
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
    BoosterNotification,
} from "../Investorpages";

import {
    WithStartupDashboardLayout,
    WithStartupRegistrationLayout,
    WithStartupRegisterLayout,
} from "../Startupcomponents";

import {
    StartupDashboard,
    StartupFundingRaising,
    StartUpRegistration,
    StartupRegistrationSuccess,
    StartupProgram,
    StartupBoosterPartner,
    StartupEAcademy,
    StartupDealRoom,
    StartupTodoList,
    StartupProfile,
    StartupNetworking,
    StartupContactUs,
    StartupNotification,
    StartupTeamMember,
    StartupEvents,
    TeamMemberSignUp,
    TeamMemberSignIn,
} from "../Startuppages";
import { MentorViewFeedback } from "../mentorPages/mentorAssignments/components/viewFeedback/viewFeedback";
import { InvestorEvaluate } from "../Investorpages/evaluation/evaluation";
import {
    WithAdminLayout,
    WithCriteriaEvaluationLayout,
} from "../adminComponents";
import { WithKVMemberLayout } from "../KVMemberComponents";
import {
    AcceptedApplication,
    AllMentors,
    AllSessions,
    ApplicationMgt,
    Assignments,
    CreateAssignment,
    CreateProgram,
    Events,
    PendingApplication,
    Programs,
    SelectionProcess,
    UserManagement,
    ViewInvestor,
    ViewKVMemberSelectionProcess,
    ViewMentor,
    ViewPartner,
    ViewKVMember,
    ViewSelectionAnswer,
    ViewKvAnswer,
    ViewMentorAnswer,
    AddKVMemberForSelectionProcess,
    SelectionProcessMentor,
    CreateNewCriteriaIntro,
    CreateNewCriteria,
    CriteriaQuestions,
    CohortStartups,
    ViewCriteria,
    ReviewCriteria,
    AssignmentResponse,
    ResponseFeedback,
    PermissionControl,
    Dashboard,
    CreateCriteriaPage,
} from "../adminPages";

import { StartupsAssigned } from "../KVMemberPages";

const routes = [
    // Start-up routes start
    {
        name: "TeamMemberSignUp",
        path: "/team-member/signup",
        component: TeamMemberSignUp,
        exact: true,
        protected: false,
    },
    {
        name: "TeamMemberSignIn",
        path: "/team-member/signin",
        component: TeamMemberSignIn,
        exact: true,
        protected: false,
    },
    {
        name: "StartupDashboard",
        path: "/startup/dashboard",
        component: WithStartupDashboardLayout(StartupDashboard),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupProgram",
        path: "/startup/program",
        component: WithStartupDashboardLayout(StartupProgram),
        exact: true,
        protected: true,
        type: "startup",
    },

    {
        name: "StartupFundraising",
        path: "/startup/fundraising",
        component: WithStartupDashboardLayout(StartupFundingRaising),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupBoosterpartner",
        path: "/startup/boosterpartner",
        component: WithStartupDashboardLayout(StartupBoosterPartner),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupEacademy",
        path: "/startup/e-academy",
        component: WithStartupDashboardLayout(StartupEAcademy),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupTodolist",
        path: "/startup/todolist",
        component: WithStartupDashboardLayout(StartupTodoList),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupNetworking",
        path: "/startup/networking",
        component: WithStartupDashboardLayout(StartupNetworking),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupDealroom",
        path: "/startup/dealroom",
        component: WithStartupDashboardLayout(StartupDealRoom),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupTeamMember",
        path: "/startup/team-member",
        component: WithStartupRegisterLayout(StartupTeamMember),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupEvents",
        path: "/startup/events",
        component: WithStartupDashboardLayout(StartupEvents),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupContactus",
        path: "/startup/support",
        component: WithStartupRegisterLayout(StartupContactUs),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupRegistration",
        path: "/startup/registration",
        component: WithStartupRegistrationLayout(StartUpRegistration),
        exact: true,
        protected: true,
        type: "startup",
    },
    {
        name: "StartupRegistrationSuccess",
        path: "/startup/registration/success",
        component: WithStartupRegisterLayout(StartupRegistrationSuccess),
        exact: true,
        protected: true,
        type: "startup",
    },

    {
        name: "StartupProfile",
        path: "/startup/profile",
        component: WithStartupDashboardLayout(StartupProfile),
        exact: true,
        protected: true,
        type: "startup",
    },

    {
        name: "StartupNotification",
        path: "/startup/notification",
        component: WithStartupDashboardLayout(StartupNotification),
        exact: true,
        protected: true,
        type: "startup",
    },

    //Start-up routes End

    //Investor Routes Start
    {
        name: "Investor Dashboard",
        path: "/investor/dashboard",
        component: WithMainInvestorLayout(InvestorDashboard),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Registration",
        path: "/investor/registration",
        component: WithInvestorRegistrationLayout(InvestorRegistration),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Opportunities",
        path: "/investor/opportunities",
        component: WithMainInvestorLayout(InvestorOpportunity),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Opportunities",
        path: "/investor/opportunities/:id",
        component: WithMainInvestorLayout(Opportunity),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Interested",
        path: "/investor/interested",
        component: WithMainInvestorLayout(InvestorInterested),
        exact: true,
        protected: true,
        type: "investor",
    },
    {
        name: "Interested",
        path: "/investor/interested/:id",
        component: WithMainInvestorLayout(Opportunity),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Portfolio",
        path: "/investor/portfolio",
        component: WithMainInvestorLayout(InvestorPortfolio),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Profile",
        path: "/investor/profile",
        component: WithInvestorSecLayout(InvestorProfile),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Events",
        path: "/investor/events",
        component: WithMainInvestorLayout(InvestorEvents),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Evaluation",
        path: "/investor/evaluation",
        component: WithMainInvestorLayout(MentorEvaluation),
        exact: true,
        protected: true,
        type: "investor",
    },

    // {
    //   name: "Investor Evaluation",
    //   path: "/investor/evaluation",
    //   component: WithMainInvestorLayout(MentorEvaluation),
    //   exact: true,
    //   protected: false,
    //   type: "investor",
    // },

    {
        name: "Investor Network",
        path: "/investor/networking",
        component: WithMainInvestorLayout(StartupNetworking),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor schedule",
        path: "/investor/schedule",
        component: WithMainInvestorLayout(InvestorScheduleCalendar),
        exact: true,
        protected: true,
        type: "investor",
    },
    {
        name: "Investor founder",
        path: "/investor/opportunities/:id/founder",
        component: WithMainInvestorLayout(InvestorFounderProfile),
        exact: true,
        protected: true,
        type: "investor",
    },
    {
        name: "Investor Commitment",
        path: "/investor/opportunities/:id/commitment",
        component: WithMainInvestorLayout(InvestorCommitment),
        exact: true,
        protected: true,
        type: "investor",
    },
    {
        name: "Investor Deal",
        path: "/investor/deal_room",
        component: WithMainInvestorLayout(StartupNetworking),
        exact: true,
        protected: true,
        type: "investor",
    },
    {
        name: "Investor Deal Room",
        path: "/investor/deal_room/:id",
        component: WithMainInvestorLayout(InvestorDealRoom),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Deal Room",
        path: "/investor/deal_room/:id/:folderName",
        component: WithMainInvestorLayout(InvestorDealFolder),
        exact: true,
        protected: true,
        type: "investor",
    },
    {
        name: "Investor Schedule",
        path: "/investor/schedule-calendar",
        component: WithMainInvestorLayout(InvestorScheduleCalendar),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Contact us",
        path: "/investor/support",
        component: WithMainInvestorLayout(StartupContactUs),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Booster Contact us",
        path: "/booster/support",
        component: WithMainInvestorLayout(StartupContactUs),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Investor Notification",
        path: "/investor/notification",
        component: WithMainInvestorLayout(InvestorNotification),
        exact: true,
        protected: true,
        type: "investor",
    },

    {
        name: "Booster Dashboard",
        path: "/boosterpartner/dashboard",
        component: WithMainInvestorLayout(BoosterDashboard),
        exact: true,
        protected: true,
        type: "booster",
    },
    {
        name: "Booster Applicants",
        path: "/boosterpartner/applicants",
        component: WithMainInvestorLayout(BoosterApplicants),
        exact: true,
        protected: true,
        type: "booster",
    },
    {
        name: "Booster Notification",
        path: "/booster/notification",
        component: WithMainInvestorLayout(BoosterNotification),
        exact: true,
        protected: true,
        type: "booster",
    },
    {
        name: "Booster Profile",
        path: "/boosterpartner/profile",
        component: WithInvestorSecLayout(BoosterProfile),
        exact: true,
        protected: true,
        type: "booster",
    },

    {
        name: "Booster Registration",
        path: "/boosterpartner/registration",
        component: WithBoosterPartnerRegistrationLayout(
            BoosterPartnerRegistration
        ),
        exact: true,
        protected: true,
        type: "booster",
    },
    //Investor Routes End

    // Mentor Routes Starts Here
    {
        name: "SignIn",
        path: "/",
        exact: true,
        component: SignIn,
        protected: false,
    },
    {
        name: "SignUp",
        path: "/signup",
        component: SignUp,
        exact: true,
        protected: false,
    },
    {
        name: "Verify",
        path: "/verify/:token",
        component: VerifyUserEmail,
        exact: true,
        protected: false,
    },
    {
        name: "Congrats",
        path: "/mentor/signup/congrats",
        component: WithMentorSecLayout(MentorCongrats),
        exact: true,
        protected: false,
    },
    {
        name: "Notification",
        path: "/mentor/notification",
        component: WithMentorMainLayout(MentorNotification),
        exact: true,
        protected: false,
        type: "mentor",
    },
    {
        name: "ConfirmEmail",
        path: "/confirm/email",
        component: MentorConfirmEmail,
        exact: true,
        protected: false,
    },

    {
        name: "ForgotPassword",
        path: "/forgot/password",
        component: MentorForgotPassword,
        exact: true,
        protected: false,
    },
    {
        name: "CheckMail",
        path: "/check/email",
        component: MentorCheckMail,
        exact: true,
        protected: false,
    },
    {
        name: "ResetPassword",
        path: "/reset/password/:token",
        component: MentorResetPassword,
        exact: true,
        protected: false,
    },
    {
        name: "VerifyOtp",
        path: "/verify/otp",
        component: MentorVerifyOTP,
        exact: true,
        protected: false,
    },
    {
        name: "InvitePeer",
        path: "/mentor/signup/invite",
        component: WithMentorSecLayout(MentorInvitePeer),
        exact: true,
        protected: false,
    },
    {
        name: "MentorDashboard",
        path: "/mentor/dashboard",
        component: WithMentorMainLayout(MentorDashboard),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "MentorDashboard",
        path: "/mentor/profile",
        component: WithMentorSecLayout(MentorProfile),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "PersonalDetails",
        path: "/mentor/registration",
        component: WithMentorRegistrationLayout(MentorPersonalDetails),
        exact: true,
        protected: false,
        type: "mentor",
    },
    {
        name: "ViewDetails",
        path: "/mentor/dashboard/view",
        component: WithMentorMainLayout(MentorViewDetails),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "MentorEvaluation",
        path: "/mentor/evaluation",
        component: WithMentorMainLayout(MentorEvaluation),
        exact: true,
        protected: false,
        type: "mentor",
    },
    {
        name: "Program",
        path: "/mentor/program",
        component: WithMentorMainLayout(MentorProgram),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "Assignmrnts",
        path: "/mentor/assignments",
        component: WithMentorMainLayout(MentorAssignments),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "Events",
        path: "/mentor/events",
        component: WithMentorMainLayout(StartupEvents),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "Schedule",
        path: "/mentor/schedule",
        component: WithMentorMainLayout(MentorSchedule),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "Networking",
        path: "/mentor/networking",
        component: WithMentorMainLayout(MentorNetworking),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "DealRoom",
        path: "/mentor/dealroom",
        component: WithMentorMainLayout(MentorDealRoom),
        exact: true,
        protected: true,
        type: "mentor",
    },

    // {
    //   name: 'DealRoom',
    //   path: '/mentor/deal_room/:id',
    //   component: WithMentorMainLayout(MentorDealRoom),
    //   exact: true,
    //   protected: true,
    // },
    // {
    //   name: ‘DealRoom’,
    //   path: ‘/deal_room/:id/:folderName’,
    //   component: WithMainLayout(DealFolder),
    //   exact: true,
    //   protected: true,
    // },
    {
        name: "DashboardProfile",
        path: "/mentor/dashboard/founder",
        component: WithMentorMainLayout(MentorDashboardProfile),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "Evaluation",
        path: "/mentor/evaluation/evaluate",
        component: WithMentorSecLayout(MentorEvaluate),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "EvaluationViewProfile",
        path: "/mentor/evaluation/view",
        component: WithMentorMainLayout(MentorEvaluationViewProfile),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "CreateAssignment",
        path: "/mentor/assignments/create",
        component: WithMentorMainLayout(MentorCreateAssignment),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "MoreDetails",
        path: "/mentor/assignments/create/details",
        component: WithMentorMainLayout(MentorMoreDetails),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "ViewFeedback",
        path: "/mentor/assignments/view/feedback",
        component: WithMentorMainLayout(MentorViewFeedback),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "ViewAssignmnet",
        path: "/mentor/assignments/view",
        component: WithMentorMainLayout(MentorViewAssignment),
        exact: true,
        protected: true,
        type: "mentor",
    },
    {
        name: "ContactUS",
        path: "/mentor/support",
        component: WithMentorSecLayout(StartupContactUs),
        exact: true,
        protected: true,
        type: "mentor",
    },

    // Mentor Routes Ends Here

    // Admin Routes

    {
        name: "admin dashboard",
        path: "/admin/",
        component: WithAdminLayout(Dashboard),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin dashboard",
        path: "/admin/dashboard",
        component: WithAdminLayout(Dashboard),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin application management",
        path: "/admin/application_mgt",
        component: WithAdminLayout(ApplicationMgt),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin application management",
        path: "/admin/application_mgt/pending/:id",
        component: WithAdminLayout(PendingApplication),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin application management",
        path: "/admin/application_mgt/accepted/:id",
        component: WithAdminLayout(AcceptedApplication),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin application management",
        path: "/admin/application_mgt/kv_view/:id",
        component: WithAdminLayout(ViewKvAnswer),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin application management",
        path: "/admin/application_mgt/mentor_screening_view/:id",
        component: WithAdminLayout(ViewMentorAnswer),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process",
        component: WithAdminLayout(SelectionProcess),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/kv/:id",
        component: WithAdminLayout(ViewKVMemberSelectionProcess),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/mentors/:id",
        component: WithAdminLayout(ViewKVMemberSelectionProcess),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/kv_add_member/:id",
        component: WithAdminLayout(AddKVMemberForSelectionProcess),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/kv_answer/:id",
        component: WithAdminLayout(ViewSelectionAnswer),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/mentors_answer/:id",
        component: WithAdminLayout(ViewSelectionAnswer),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/mentor/:id",
        component: WithAdminLayout(SelectionProcessMentor),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/new-criteria-intro",
        component: WithCriteriaEvaluationLayout(CreateNewCriteriaIntro),
        // exact: true,
        protected: true,
        type: "admin",
    },

    // {
    //     name: "admin Selection Process",
    //     path: "/admin/selection_process/new-criteria/:id",
    //     component: WithCriteriaEvaluationLayout(CreateNewCriteria),
    //     exact: true,
    //     protected: true,
    //     type: "admin",
    // },
    {
        name: "admin Selection Process",
        path: "/admin/selection_process/new-criteria/:id",
        component: WithCriteriaEvaluationLayout(CreateCriteriaPage),
        exact: true,
        protected: true,
        type: "admin",
    },
    // {
    //     name: "admin Selection Process",
    //     path: "/admin/selection_process/criteria-questions",
    //     component: WithAdminLayout(CriteriaQuestions),
    //     exact: true,
    //     protected: true,
    //     type: "admin",
    // },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/cohort/:name/:id",
        component: WithAdminLayout(CohortStartups),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/criteria/:id",
        component: ViewCriteria,
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Selection Process",
        path: "/admin/selection_process/review_criteria",
        component: WithAdminLayout(ReviewCriteria),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Program",
        path: "/admin/program",
        component: WithAdminLayout(Programs),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Program",
        path: "/admin/program/create",
        component: WithAdminLayout(CreateProgram),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Program",
        path: "/admin/program/assignments",
        component: WithAdminLayout(Assignments),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Program",
        path: "/admin/program/create_assignment",
        component: WithAdminLayout(CreateAssignment),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Program",
        path: "/admin/program/response/:id",
        component: WithAdminLayout(AssignmentResponse),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Program",
        path: "/admin/program/feedback/:id",
        component: WithAdminLayout(ResponseFeedback),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin User Management",
        path: "/admin/users",
        component: WithAdminLayout(UserManagement),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin User Management",
        path: "/admin/users/mentors",
        component: WithAdminLayout(AllMentors),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin User Management",
        path: "/admin/users/mentors/:id",
        component: ViewMentor,
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin User Management",
        path: "/admin/users/sessions",
        component: WithAdminLayout(AllSessions),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin User Management",
        path: "/admin/users/investors/:id",
        component: ViewInvestor,
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin User Management",
        path: "/admin/users/partners/:id",
        component: ViewPartner,
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin User Management",
        path: "/admin/users/member/:id",
        component: WithAdminLayout(ViewKVMember),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Booster Partners",
        path: "/admin/booster_partners",
        component: WithAdminLayout(() => <div>Booster Partners</div>),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin To-do list",
        path: "/admin/todo",
        component: WithAdminLayout(() => <div>To-Do list</div>),
        exact: true,
        protected: false,
        type: "admin",
    },

    {
        name: "admin Program",
        path: "/admin/events",
        component: WithAdminLayout(Events),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin E-academy",
        path: "/admin/academy",
        component: WithAdminLayout(() => <div>E-Academy</div>),
        exact: true,
        protected: false,
        type: "admin",
    },

    {
        name: "admin documents",
        path: "/admin/documents",
        component: WithAdminLayout(() => <div>Documents</div>),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Permission Control",
        path: "/admin/permission",
        component: WithAdminLayout(PermissionControl),
        exact: true,
        protected: true,
        type: "admin",
    },

    {
        name: "admin Permission Control",
        path: "/admin/permission/:userId",
        component: WithAdminLayout(PermissionControl),
        exact: true,
        protected: true,
        type: "admin",
    },

    //Admin Routes Ends Here

    // KV Member routes
    {
        name: "kv member dashboard",
        path: "/kv-member",
        component: WithKVMemberLayout(Dashboard),
        exact: true,
        protected: false,
        type: "admin",
    },
    {
        name: "kv member dashboard",
        path: "/kv-member/dashboard",
        component: WithKVMemberLayout(Dashboard),
        exact: true,
        protected: true,
        type: "admin",
    },
    {
        name: "kv member startup assigned",
        path: "/kv-member/startup-assigned",
        component: WithKVMemberLayout(StartupsAssigned),
        exact: true,
        protected: true,
        type: "admin",
    },

    // KV Member routes Ends Here

    {
        name: "Not Found",
        component: NotFound,
        exact: true,
        type: "",
        protected: false,
    },
];

export default routes;
