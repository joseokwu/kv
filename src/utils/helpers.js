export const getToken = () => {
  return localStorage.getItem("user:token");
};

export const setAuthToken = (token) => {
  localStorage.setItem("user:token", token);
};

export const setLocationHistory = (location) => {
  sessionStorage.setItem("user:redirect:location", JSON.stringify(location));
};

export const getLocationHistory = () => {
  return JSON.parse(sessionStorage.getItem("user:redirect:location"));
  // const loc = JSON.parse(localStorage.getItem('user:redirect:location'))
  // //console.log(loc)
  // return loc;
};

// export const clearLocation = ()=>{

//     localStorage.removeItem('user:redirect:location')
// }

export const setRole = (role) => {
  localStorage.setItem("kv:user:role", role);
};

export const getRole = () => {
  let role = localStorage.getItem("kv:user:role");
  return role;
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const convertToMillion = (num = "0") => {
  const strNum = num?.replaceAll(",", "");
  if (/^\d+$/.test(strNum) && strNum?.length >= 7) {
    let integerPart = strNum.substr(0, strNum.length - 6);
    let decimalPart = strNum.substr(strNum.length - 6, strNum.length - 1);
    let newNum = `${integerPart}.${decimalPart}`;
    return `${Math.round(Number(newNum))}M`;
  } else {
    return num;
  }
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function formatTime(timeToFormat) {
  return `${
    new Date(timeToFormat).getHours() > 12
      ? new Date(timeToFormat).getHours() - 12
      : new Date(timeToFormat).getHours()
  }:${
    new Date(timeToFormat).getMinutes() > 9
      ? new Date(timeToFormat).getMinutes()
      : new Date(timeToFormat).getMinutes() + "0"
  }${new Date(timeToFormat).getHours() > 12 ? "pm" : "am"}`;
}

export function formatDate(dateToFormat) {
  return `${new Date(dateToFormat).getDate()} ${
    months[new Date(dateToFormat).getMonth()]
  }, ${new Date(dateToFormat).getFullYear()}`;
}
