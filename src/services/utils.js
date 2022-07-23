import { uploadRequest, request } from "../utils/axios";

export const upload = async (value) => {
    try {
        const response = await uploadRequest.post("/v1/file/upload", value);
        return response.data?.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const sendFeedBack = async (value) => {
    try {
        const response = await request.post("feedback", value);
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const search = async (value) => {
    try {
        const response = await request.post("searchUser", value);
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
};
