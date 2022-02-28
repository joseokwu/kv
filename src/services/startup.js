import { request } from '../utils/axios'

export const getDashboardInfo = async() => {
    try {
        const res = request.post('/startup/dashboard')
        return res?.data
    } catch (err) {
        throw err;
    }
}