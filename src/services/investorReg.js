import { request } from '../utils/axios'

export const personalRegDetails = async (values) => {
  try {
    const res = await request.post('investor/add-personal-details', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const investorRegDetails = async (values) => {
  try {
    const res = await request.post('investor/add-investor-details', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const investmentApproach = async (values) => {
  try {
    const res = await request.post('investor/add-investment-approach', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}

export const portfolio = async (values) => {
  try {
    const res = await request.post('investor/add-portfolio', values)
    console.log(res?.data)
    return res?.data
  } catch (err) {
    throw err
  }
}
