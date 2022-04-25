import { request } from "../utils/axios";

export const register = async (values) => {
  try {
    const res = await request.post("register", values);

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const userLogin = async (values) => {
  try {
    const res = await request.post("login", values);

    return res?.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const profile = async (value) => {
  try {
    // console.log(value)
    console.log("trying to make request");
    const res = await request.post("getProfile", { type: value });
    return res?.data;
  } catch (err) {
    console.log(err);
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const forgotPassword = async (values) => {
  try {
    const res = await request.post("forgot", values);
    console.log(res?.data);
    return res?.data;
  } catch (err) {
    console.log(err?.response);
    throw err;
  }
};

export const resendEmail = async (value) => {
  try {
    const res = await request.post("resendEmail", value);
    console.log(res?.data);
    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const verifyEmail = async (token) => {
  try {
    const res = await request.post("verifyEmail", { token });
    console.log(res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const resetPassword = async (value) => {
  try {
    const res = await request.post("reset", value);
    console.log(res?.data);
    return res?.data;
  } catch (err) {
    throw err;
  }
};

// eligibilityCriteria: "sgsdgsgsg"
// freeCreditValue: true
// importantNote: "ssgsggss"
// offerings: "adsfdssgdgsg"
// partnershipValidity: "Animation"
// process: "sgdggdsggsgsgsds"
// turnAroundTime: "February"
