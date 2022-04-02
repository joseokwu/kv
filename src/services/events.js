import { request } from "../utils/axios";

export const getEvents = async (values) => {
  try {
    const res = await request.post("event_service/events", values);
    return res?.data;
  } catch (err) {
    throw err;
  }
};
