import { useSelector, useDispatch } from "react-redux";
import {
  registerUser,
  loginUser,
  getProfile as profile,
  changeStatus,
  logout,
  edit,
  dashboardProfile,
  updateStartupData,
  updateStartupProfile,
  updateInvestorProfile,
  updatePartnerProfile,
  updateInvestorData,
  updateMentorProfile,
  updateMentorData,
} from '../store/actions/auth'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { updateStartup, postMentorProfile } from '../services'
import toast from 'react-hot-toast'

export const useAuth = () => {
  const history = useHistory()

  const dispatch = useDispatch()

  const stateAuth = useSelector((state) => state.auth)

  const register = async (values) => {
    try {
      const res = await dispatch(registerUser(values))
      console.log(res)
      if (res) {
        history.push('/confirm/email')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const newLogin = async (values) => {
    const res = await dispatch(loginUser(values))

    return res
  }

  const userProfile = useCallback(async (value) =>{
    dispatch(await profile(value));  
}, [dispatch])

const callUpdateStartupData = async (value) => {
  dispatch(await updateStartupData(value));
};

  const getDashboardProfile = useCallback(
    async (value) => {
      dispatch(await dashboardProfile(value))
    },
    [dispatch],
  )

  const editUser = () => {
    dispatch(edit())
  }

  const changeSignup = (value) => {
    dispatch(changeStatus(value))
  }

  const updateProfile = (prop, value) => {
    dispatch(updateStartupProfile(prop, value))
  }

  const updateMentorProfileState = (prop, value) => {
    dispatch(updateMentorProfile(prop, value));
  };

  const updateMentorInfo = async (lastPage = false) => {
    try {
      const dataToPost = {
        accType: "mentor",
        values: stateAuth.mentorData,
        lastPage,
      };

      const res = await updateStartup(dataToPost);
      console.log("res", res);
      return res?.success;
    } catch (error) {
      console.error(error?.response?.data?.message ?? error?.response?.message);
      return false;
    }
  };

  const updatePartnerLocalData = async(prop, value) =>{
    dispatch(updatePartnerProfile(prop , value))
}

  const userLogout = () => {
    dispatch(logout())

    history.push('/')
  }

  const updateStartupInfo = async (lastPage = false) => {
    try {
      const payload = {
        accType: stateAuth.type[0],
        values: stateAuth.startupData,
        lastPage,
      }
      console.log(payload)
      const res = await updateStartup(payload)
      toast.success(res?.message)
    } catch (err) {
      console.log(err?.response)
      toast.error(err?.response?.data?.message ?? err?.response?.message)
    }
  }

  const updateInvestorProfileData = (prop, value) => {
    dispatch(updateInvestorProfile(prop, value))
  }

  const getInvestorData = async (value) => {
    dispatch(await updateInvestorData(value));
  };

  const updateInvestorInfo = async (lastPage = false) => {
    try {
      const payload = {
        accType: stateAuth.type[0],
        values: stateAuth.investorData,
        lastPage,
      };

      const res = await updateStartup(payload)
      toast.success(res?.message)
    } catch (err) {
      console.log(err?.response)
      toast.error(err?.response?.data?.message ?? err?.response?.message)
    }
  }

  const getSavedMentorData = async (value) => {
    dispatch(await updateMentorData(value));
  };

  const updatePartnerInfo = async(lastPage = false) =>{
    try{
    const payload = {
    accType:stateAuth.type[0],
    values:stateAuth.partnerData,
    lastPage
    }
    console.log(payload)
    const res = await updateStartup(payload);
    toast.success(res?.message)

    }catch(err){
    console.log(err?.response)
    toast.error(err?.response?.data?.message ?? err?.response?.message)
    }
   }

  return {
    stateAuth,
    register,
    newLogin,
    userProfile,
    changeSignup,
    userLogout,
    editUser,
    callUpdateStartupData,
    updatePartnerInfo,
    updatePartnerLocalData,
    getDashboardProfile,
    updateProfile,
    updateStartupInfo,
    updateInvestorProfileData,
    updateInvestorInfo,
    getInvestorData,
    updateMentorProfileState,
    getSavedMentorData,
    updateMentorInfo,
  };
}
 

// date: "2022-04-23T13:22:50.522Z"
// description: "4 Apr 2020 — I am trying to add Select All / Unselect All to React Antd's 'SELECT' component. ... I see that I do get everything selected & unselected in the \" ...\n3 answers\n\nTop answer: \nThe issue was with using Antd's Form & Form.item along wi"
// email: "isaackelvin378@gmail.com"
// industry: "Agriculture, food and beverages"
// logo: "https://cdn.shoutng.com/kvmppa8o6zvz0ibmmd6rx9.png"
// phone: "+2348163394719"
// startupId: "6263c596ed0b02cccd2c9696"
// startupName: "Winner Airlines"