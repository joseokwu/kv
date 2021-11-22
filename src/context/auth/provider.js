import React, {
  createContext,
  useEffect,
  useState,
  useReducer,
  useCallback

} from 'react'
import { withRouter, useHistory } from 'react-router-dom'
// import { toast } from 'react-toastify';
// import { decipherJwt } from 'decipher-jwt';
import {
  authReducer,
  AUTH_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  COMPLETE_REG,
  COMPLETE_REG_FAIL,
  COMPLETE_REG_SUCCESS,

} from './reducers'
//import { register, userLogin } from 'services';
import { setAuthToken, getToken, getLocationHistory } from '../../utils/helpers';
// let {result} = decipherJwt( getToken())

// const history = useHistory()

export const AuthContext = createContext()

export const AuthProvider = withRouter(({children, history }) =>{


    const [state, dispatch] = useReducer(authReducer, {

        authenticated: getToken() ? true : false,
        user: null,
        error: false,
        loading: false
    })

    //  const userReg = async (values) =>{
    //         try{
    //             dispatch({
    //                 type: AUTH_START
    //             })
    //             const response = await register(values);

    //             dispatch({
    //                 type: REGISTER_SUCCESS,
    //                 payload: response
    //             })
    //             toast.success('Registered Successfully')
    //             window.open('/signin', '_self')
    //         }catch(err){
    //             dispatch({
    //                 type: REGISTER_FAIL,
    //                 payload: err.message
    //             })
    //             toast.error('Error in registering user')
    //         }
    // }

    // const login = async(value) => {
    //     try {
    //         dispatch({
    //             type: AUTH_START
    //         })
    //         const res = await userLogin(value);

    //         await setAuthToken(res?.token)
    //         dispatch({
    //             type:  LOGIN_SUCCESS,
    //             payload: result?.data
    //         })

    //         history.push('/dashboard')
    //         getProfile()
    //         toast.success('Login Successful')

    //     } catch (err) {
    //         dispatch({
    //             type: LOGIN_FAIL

    //         })
    //         console.log(err)
    //         toast.error(err?.message ?? 'Login failed')
    //     }
    // }

    // const logout = async () => {

    //     localStorage.clear()
    //     history.push('/signin')

    // }

    // const getProfile = useCallback (async () => {
    //     try {
    //         dispatch({
    //             type: USER_SUCCESS,
    //             payload:result?.data
    //         })
    //     } catch (err) {
    //      toast.error( 'session expired')
    //     }

    // }, [])


    // useEffect(() => {
    //     const loadApp = async () => {
    //         if (getToken()) {
    //             await getProfile()
    //             if (state.authenticated) {
    //                 const storedLocation = getLocationHistory()
    //                 if (storedLocation) {
    //                     history.push(storedLocation)
    //                     localStorage.removeItem('user:redirect:location')
    //                 }
    //            }
    //         }

    //     }

    //     loadApp()

    // }, [getProfile, history, state.authenticated])


    // useEffect(() => {

    //     const asynEffect = async () => {
    //         if (state.authenticated) {
    //             const storedLocation = getLocationHistory()
    //             // console.log(getLocationHistory())
    //             // console.log(state.authenticated )
    //             if (storedLocation) {
    //                 history.push(storedLocation)

    //             }
    //         }
    //     }
    //     asynEffect()
    // }, [history, state.authenticated ])

//  email: "brightbrain@gmail.com"
// fullname: "Enerst Owunbuzia"
// phoneNumber: "090378293


     return (
         <AuthContext.Provider value={{
             state
            
         }} >
            {
                children
            }

         </AuthContext.Provider>
     )


})
