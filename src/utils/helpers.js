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

export const setType = (type) => {
  localStorage.setItem("kv:user:role", type);
};

export const getType = () => {
  let type = localStorage.getItem("kv:user:role");
 // console.log(type)
  return type;
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

 export const parseFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
    reader.readAsBinaryString(file);
  });
};

 export const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();    
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours %= 12;
  hours = hours || 12;    
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
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
