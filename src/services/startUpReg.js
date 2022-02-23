import { request } from '../utils/axios'

export const startUpReg = async (values) => {
  try {
    const res = await request.post('startup/add-startup-profile', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const pitchDeck = async (values) => {
  try {
    const res = await request.post('startup/add-pitch-deck', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const team = async (values) => {
  try {
    const res = await request.post('startup/add-teams', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}
