import { request } from "../utils/axios";

export const getDashboardInfo = async () => {
  try {
    const res = await request.post("startup/dashboard");

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const getEventInfo = async () => {
  try {
    const res = await request.post("event/all");
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

export const getBoosterData = async () => {
  try {
    const res = await request.post("startup/boosterpartner");
    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const getFundraisingData = async () => {
  try {
    const res = await request.post("startup/fundraising");

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

    return res?.data;
  } catch (err) {
    throw err;
  }
};


