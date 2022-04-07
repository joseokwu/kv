import axios from 'axios';
import { getToken } from './helpers';

import { BASE_URL } from '../config/env';

const options = {
    baseURL: BASE_URL,
    headers: {
        	Accept: 'application/json,text/plain,*/*',
		    'Content-Type': 'application/json',
    }
}

const uploadOptions = {
	baseURL: "http://ec2-54-227-69-213.compute-1.amazonaws.com",
    headers: { "Content-Type": "multipart/form-data" }
}

export const uploadRequest = axios.create(uploadOptions);

export const request = axios.create(options)

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

