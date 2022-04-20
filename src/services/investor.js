import { request } from "../utils/axios";

export const addInvestorProfile = async (values) => {
  try {
    const result = await request.post("investor/add-investor-detail", values);
    return result.data;
  } catch (err) {
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const getInvestorDashboard = async (values) => {
  try {
    const result = await request.post("investor/dashboard", values);
    return result.data;
  } catch (err) {
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const getInvestorOpportunity = async (values) => {
  try {
    const result = await request.post("investor/opportunity", values);
    return result.data;
  } catch (err) {
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const getStartupInvesrtorProfile = async (values) => {
  try {
    const result = await request.post("investor/opportunity/profile", values);
    return result.data;
  } catch (err) {
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const getInvestorEvaluation = async (values) => {
  try {
    const result = await request.post("investor/evaluation", values);
    return result.data;
  } catch (err) {
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const updateInvestor = async(values) =>{
  try{
    const result = await request.post("updateOnce", values);
    console.log(result?.data)
    return result?.data;
  }catch (err) {
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
}