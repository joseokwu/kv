import { request } from "../utils/axios";
import axios from "axios";

export const startUpReg = async (values) => {
    try {
        const res = await request.post("startup/add-startup-profile", values);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const pitchDeck = async (values) => {
    try {
        const res = await request.post("startup/add-pitch-deck", values);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const team = async (values) => {
    try {
        const res = await request.post("startup/add-teams", values);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const product = async (values) => {
    try {
        const res = await request.post("", values);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const fundraising = async (values) => {
    try {
        const res = await request.post("startup/add-fundraising", values);
        console.log(res?.data);
        return res?.data;
    } catch (err) {
        throw err;
    }
};

export const fetchCountries = async () => {
    var headers = new Headers();
    headers.append(
        "X-CSCAPI-KEY",
        "R3NUdUE3RTdlbWt5ckF3WEJLMkFwQ0VJWDNUaThLUGdrU09VZEhuaA=="
    );

    var requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
    };

    return fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log("error", error));
};

export const fetchStates = async (countryISO) => {
    var headers = new Headers();
    headers.append(
        "X-CSCAPI-KEY",
        "R3NUdUE3RTdlbWt5ckF3WEJLMkFwQ0VJWDNUaThLUGdrU09VZEhuaA=="
    );

    var requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
    };

    return fetch(
        `https://api.countrystatecity.in/v1/countries/${countryISO}/states`,
        requestOptions
    )
        .then((response) => response.json())
        .catch((error) => console.log("error", error));
};

export const fetchCities = async (countryISO, stateISO) => {
    var headers = new Headers();
    headers.append(
        "X-CSCAPI-KEY",
        "R3NUdUE3RTdlbWt5ckF3WEJLMkFwQ0VJWDNUaThLUGdrU09VZEhuaA=="
    );

    var requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
    };

    return fetch(
        `https://api.countrystatecity.in/v1/countries/${countryISO}/states/${stateISO}/cities`,
        requestOptions
    )
        .then((response) => response.json())
        .catch((error) => console.log("error", error));
};
