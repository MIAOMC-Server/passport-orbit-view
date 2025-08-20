export const usePassportApi = (
    type: 'login' | 'register',
    data: { email: string; password: string }
) => {
    const apiUrl = type === 'login' ? '/api/login' : '/api/register'

    const response = fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response
}
