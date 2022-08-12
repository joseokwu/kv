import { request } from "../utils/axios";

export const getEventInfo = async () => {
    try {
        const res = await request.post("events");
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const getProgramInfo = async () => {
    try {
        const res = await request.post("startup/programs");
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const getBoosterData = async (value) => {
    try {
        const res = await request.post("partners", value);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const getStartupRequest = async (value) => {
    try {
        const res = await request.post("allRequest", value);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const applyToPartners = async (value) => {
    try {
        const res = await request.post("apply", value);

        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const getStartupProfile = async () => {
    try {
        const res = await request.post("startup/profile");

        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const getStartupFounderProfile = async () => {
    try {
        const res = await request.post("startup/founder-profile");
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const updateFounderProfile = async (values) => {
    try {
        const res = await request.post("updateProfile", values);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        console.log(err?.response);
        throw err;
    }
};

export const getPrograms = async (value) => {
    try {
        const res = await request.post("getUserPrograms", value);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const assignment = async (value) => {
    try {
        const res = await request.post("assignments", value);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const getSubmittedAssignment = async (value) => {
    try {
        const res = await request.post("submittedAssignment", value);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const submitAssignment = async (value) => {
    try {
        const res = await request.post("submitAssignment", value);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const updateStartup = async (value) => {
    try {
        const res = await request.post("v1/profile", value);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
