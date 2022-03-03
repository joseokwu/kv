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
