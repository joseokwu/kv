import { request } from '../utils/axios'

export const mentorReg = async(values) => {
    try {
        const res = request.post('')
        return res?.data
    } catch(err) {
        throw err;
    }
}