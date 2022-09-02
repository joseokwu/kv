import { uploadRequest, request } from '../utils/axios';

export const upload = async (formData) => {
  try {
    const response = await uploadRequest.post('/v1/file', formData);
    console.log(response);
    return response.data?.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const sendFeedBack = async (value) => {
  try {
    const response = await request.post('feedback', value);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const search = async (value) => {
  try {
    const response = await request.post('searchUser', value);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const sendSupport = async ({ email, fullName, message }) => {
  try {
    const res = await request.post(`/v1/support`, {
      email,
      fullName,
      message,
    });
    return res?.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
