export const getToken = ()=>{
    return localStorage.getItem('user:token')
}

export const setAuthToken = (token) => {
    localStorage.setItem('user:token', token);

}

export const setLocationHistory = (location) => {

     console.log(location)
     localStorage.setItem('user:redirect:location', JSON.stringify(location))
}

export const getLocationHistory = () => {
    const loc = JSON.parse( localStorage.getItem('user:redirect:location'))
    return loc;
}
