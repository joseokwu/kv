import axios from "axios";
import { getToken } from "./helpers";

import { BASE_URL, FILE_UPLOAD_URL } from "../config/env";

const options = {
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/json",
    },
};

const uploadOptions = {
    baseURL: BASE_URL,
    headers: { "Content-Type": "multipart/form-data" },
};

export const uploadRequest = axios.create(uploadOptions);

export const request = axios.create(options);

request.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

uploadRequest.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
