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
    const res = await request.post("events");
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
    
    return res?.data;
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
    console.log(err?.response)
    throw err;
  }
};


export const getPrograms = async(value) =>{
  try{
    const res = await request.post("programs", value);
    console.log(res?.data)
    return res?.data;
  }catch(err){
    throw err;
  }
}

// description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
// duration: "5"
// endTime: "Fri May 13 2022 15:00:00 GMT+0100 (West Africa Standard Time)"
// guest: "Ayo dele"
// joinWith: "https://meet.google.com/?authuser=1"
// notifyMe: true
// sector: "Finance"
// startTime: "Fri May 13 2022 10:00:00 GMT+0100 (West Africa Standard Time)"
// topic: "Legal Frame work"
// "Fri May 13 2022 18:00:00 GMT+0100 (West Africa Standard Time)"





