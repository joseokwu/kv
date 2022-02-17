export const getToken = ()=>{
    return localStorage.getItem('user:token')
}

export const setAuthToken = (token) => {
    localStorage.setItem('user:token', token);

}

export const setLocationHistory = (location) => {

     console.log(location);
     sessionStorage.setItem('user:redirect:location', JSON.stringify(location))
}

export const getLocationHistory = () => {

    return JSON.parse(sessionStorage.getItem('user:redirect:location'));
    // const loc = JSON.parse(localStorage.getItem('user:redirect:location'))
    // //console.log(loc)
    // return loc;
}

// export const clearLocation = ()=>{
    
//     localStorage.removeItem('user:redirect:location')
// }