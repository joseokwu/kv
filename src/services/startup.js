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
    const res = await request.post("partners");
    console.log(res?.data)
    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const getStartupRequest = async (value) => {
  try {
    const res = await request.post("allRequest" , {startupId:value});
    console.log(res?.data)
    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const applyToPartners = async(value) =>{
  try{
    const res = await request.post("apply" , value);
    console.log(res?.data)
  }catch(err){
    throw err;
  }
}

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
    console.log(res?.data)
    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const updateFounderProfile = async (values) => {
  try {
    const res = await request.post("updateProfile", values);
    console.log(res?.data)
    return res?.data;
  } catch (err) {
    console.log('heeeee')
    throw err;
  }
};








