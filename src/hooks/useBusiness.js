import { useSelector, useDispatch } from 'react-redux'
import {
  changeDPath,
  showDEventAction,
  addDEducation,
  setDWorkExperience,
} from '../store/actions/business'
import { useAuth } from './useAuth'

export const useActivity = () => {
  const { stateAuth } = useAuth()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.business)
  //const authSte = useSelector((state) => state);

  const changePath = (value) => {
    dispatch(changeDPath(value))
  }

  const showEventAction = () => {
    dispatch(showDEventAction())
  }

  const setWorkExperience = (values) => {
    dispatch(setDWorkExperience(values))
  }

  const addEducation = (value) => {
    dispatch(addDEducation(value))
  }

  return {
    state,
    changePath,
    showEventAction,
    setWorkExperience,
    addEducation,
  }
}
