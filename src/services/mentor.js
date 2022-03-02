import { request } from '../utils/axios'

export const getMentorDashboardData = async () => {
  try {
    const res = await request.post('/mentor/dashboard')
    return res?.data
  } catch (err) {
    throw err
  }
}
