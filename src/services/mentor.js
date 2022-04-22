import { request } from "../utils/axios";

export const getDashboard = async () => {
  try {
    const res = await request.post("mentor/dashboard");

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const mentorEvaluations = async () => {
  try {
    const res = await request.post("mentor/evaluation");

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const mentorPrograms = async () => {
  try {
    const res = await request.post("mentor/program");

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const mentorAssignments = async () => {
  try {
    const res = await request.post("mentor/assignment");

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const mentorProfile = async () => {
  try {
    const res = await request.post("mentor/profile");

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const postMentorProfile = async (values) => {
  try {
    const res = await request.post("updateMentorProfile", values);
    console.log(res?.data);
    return res?.data;
  } catch (err) {
    console.log("mentor");
    throw err;
  }
};
