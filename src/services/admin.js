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
