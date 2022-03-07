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
    const res = await request.post("event/all");
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
    const res = await request.post("startup/boosterpartner");
    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const getFundraisingData = async () => {
  try {
    const res = await request.post("startup/fundraising");

    return res?.data;
  } catch (err) {
    throw err;
  }
};

export const getStartupProfile = async () => {
  try {
    const res = await request.post("startup/profile");

    return res?.data;
  } catch (err) {
    throw err;
  }
};
// description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, facilisi sodales cursus tellus nam ut. Enim, at imperdiet praesent velit. Eget consequat, sollicitudin molestie curabitur lobortis imperdiet. Vulputate malesuada tortor sit mi laoreet. Iaculis quis pretium urna."
// financialDetails:
// investor: "Mope Abudu"
// lastFunding: "Fri Mar 18 2022 02:00:00 GMT+0100 (West Africa Standard Time)"
// totalFunding: "50,000"
// valuation: "$5 Million (9 Oct.,2021)"
// [[Prototype]]: Object
// logo: "Yebox"
// name: "Yebox Technology"
// pitchDeck: Array(2)
// 0: {file: 'file', size: '20MB', filename: 'pitch file'}
// 1: {file: 'video', size: '20MB', filename: 'pitch deck video'}
// length: 2
// [[Prototype]]: Array(0)
// team: Array(4)
// 0: {name: 'Prima Jakatar', position: 'Founder and CEO', image: '', socialMedia: Array(3)}
// 1: {name: 'Prima Jakatar', position: 'Founder and CEO', image: '', socialMedia: Array(3)}
// 2: {name: 'Prima Jakatar', position: 'Founder and CEO', image: '', socialMedia: Array(3)}
// 3: {name: 'P

