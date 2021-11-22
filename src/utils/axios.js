import axios from 'axios';
import { getToken } from './helpers';

import { BASE_URL } from 'config/constants';

const options = {
    baseURL: BASE_URL,
    headers: {
        	Accept: 'application/json,text/plain,*/*',
		    'Content-Type': 'application/json',
    }
}

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
