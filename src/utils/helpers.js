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




export const formatBytes = (bytes, decimals = 2) => {
	if (bytes === 0) return '0 Bytes';

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};