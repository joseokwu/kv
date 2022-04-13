import { request } from '../utils/axios'

export const mentorReg = async (values) => {
  try {
    const res = await request.post('', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const WorkExperience = async (values) => {
  try {
    const res = await request.post('', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const Skills = async (values) => {
  try {
    const res = await request.post('', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const Offerings = async (values) => {
  try {
    const res = await request.post('', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const Assistant = async (values) => {
    try {
      const res = await request.post('', values)
      console.log(res?.data)
      return res?.data
    } catch (err) {
      throw err
    }
  }
