import { request } from "../utils/axios";

export const getDashbordInfo = async () => {
  try {
    const res = await request.post("startup/dashboard");

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
