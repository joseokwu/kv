import { request } from "../utils/axios";
import { BASE_URL } from "../config/env";
import axios from "axios";

export const register = async (values) => {
    try {
        const res = await request.post("v1/auth/register", values);
        return res?.data;
    } catch (err) {
        console.log(err?.response?.data?.message, "somethings went wrong");
        throw err;
    }
};

export const userLogin = async (values) => {
    try {
        const res = await request.post("v1/auth/login", values);
        console.log(res);
        return res?.data;
    } catch (err) {
        console.log(err?.response?.data);
        console.log(err?.response?.data?.message);
        throw err;
    }
};

export const profile = async () => {
    try {
        // console.log(value)
        console.log("trying to make request");
        const res = await request.get("v1/profile");
        console.log(res.data);
        return res?.data;
    } catch (err) {
        console.log(err);
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error);
    }
};

export const user = async () => {
    try {
        // console.log(value)
        console.log("trying to make request");
        const res = await request.get("v1/user");
        console.log(res);
        return res?.data;
    } catch (err) {
        console.log(err);
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error);
    }
};

export const forgotPassword = async (values) => {
    try {
        const res = await request.post("v1/auth/forgot-password", values);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        console.log(err?.response);
        throw err;
    }
};

export const resendEmail = async (value) => {
    try {
        const res = await request.post(
            "v1/auth/resend-account-verification",
            value
        );
        console.log(res);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const verifyEmail = async (token) => {
    try {
        const res = await axios.post(
            `${BASE_URL}v1/auth/verify`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // console.log("verifyEmail", token);
        // const res = await request.post("v1/auth/verify");
        console.log(res);
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const resetPassword = async (token, value) => {
    try {
        const res = await axios.post(
            `${BASE_URL}v1/auth/reset-password`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};
