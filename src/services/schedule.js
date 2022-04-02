import { request } from "../utils/axios";


export const getAllSchedule = async () => {
    try {
      const res = await request.post("schedule/all");
      return res?.data;
    } catch (err) {
      throw err;
    }
  };

