import { request } from "../utils/axios";

export const getStakeHolders = async (values) => {
    try {
        const response = await request.post("allStakeHolders", values);
        return response.data;
    } catch (err) {
        console.log(err?.response?.data?.message);
        throw err;
    }
};

export const applicationManagement = async (values) => {
    try {
        const response = await request.post("manageApplications", values);
        return response.data;
    } catch (err) {
        console.log(err?.response?.data?.message);
        throw err;
    }
};

export const addMentor = async (values) => {
    try {
        const response = await request.post("addMentors", values);
        return response.data;
    } catch (err) {
        console.log("serdsd", err?.response?.data?.message);
        throw err;
    }
};

export const getInvestorCommitment = async (values) => {
    try {
        const response = await request.post("getInvestorCommitment", values);
        return response.data;
    } catch (err) {
        console.log("serdsd", err?.response?.data?.message);
        throw err;
    }
};

export const manageCommitment = async (values) => {
    try {
        const response = await request.post("manageCommitment", values);
        return response.data;
    } catch (err) {
        console.log("serdsd", err?.response?.data?.message);
        throw err;
    }
};

export const createCriteria = async (values) => {
    try {
        const response = await request.post("createCriterial", values);
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const getCriteria = async () => {
    try {
        const response = await request.post("getCriterial", {});
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const createPrograms = async (values) => {
    try {
        const response = await request.post("createPrograms", values);
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const createAssignment = async (values) => {
    try {
        const response = await request.post("createAssignment", values);
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const getPrograms = async () => {
    try {
        const response = await request.post("getPrograms", {
            limit: 5,
            page: 1,
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const getAssignments = async () => {
    try {
        const response = await request.post("getAssignments", {
            limit: 5,
            page: 1,
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const makeAdminRequest = async (endpoint, data) => {
    try {
        const response = await request.post(endpoint, data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

// export const createPrograms = async () => {
//   try {
//     const response = await request.post('createPrograms', {});
//     console.log(response.data);
//     return response.data;
//   } catch (err) {
//     throw err;
//   }
// };

// export const getPrograms = async (values) => {
//   try {
//     const response = await request.post('getPrograms', values);
//     return response.data;
//   } catch (err) {
//     console.log(err?.response?.data?.message);
//     throw err;
//   }

// };

//KV Member
