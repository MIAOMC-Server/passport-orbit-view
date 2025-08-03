import axios from 'axios'

interface VerifyUserRequestReturn {
    status: boolean
    message?: string
    data?: {}
}

class APIRequest {
    private static APIEndpoint = import.meta.env.VITE_PASSPORT_API_ENDPOINT

    VerifyUserRequest = async (data: string, hash: string): Promise<VerifyUserRequestReturn> => {
        try {
            const response = await axios.get(`${APIRequest.APIEndpoint}/verifier/verify`, {
                params: { data, hash }
            })

            if (response.status !== 200) {
                return { status: false, message: 'Verification failed' }
            }

            const resData = response.data
            if (resData.status) {
                return { status: true, message: 'Verification successful' }
            }

            return { status: false, message: resData.message || 'Verification failed' }
        } catch (error) {
            return {
                status: false,
                message: 'An error occurred during verification'
            }
        }
    }
}

const BackendRequest = new APIRequest()

export default BackendRequest
