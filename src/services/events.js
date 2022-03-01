import { request } from "../utils/axios";

export const getEvents = async (id) => {
  try {
    const res = await request.post("/event/all", id);
    return res?.data;
  } catch (err) {
    throw err;
  }
};
