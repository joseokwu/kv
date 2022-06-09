import { request } from "../utils/axios";

export const getEvents = async (values) => {
  try {
    const res = await request.post("events", values);
    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const eventRequest = async (url, values) => {
  try {
    const res = await request.post(url, values);
    return res?.data;
  } catch (err) {
    throw err;
  }
};




