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

export const fetchCities = async (country, state) => {
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

    fetch(
        "https://api.countrystatecity.in/v1/countries/NG/states",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
};
