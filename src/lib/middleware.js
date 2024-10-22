import Res from './response'

export const middleware = (req) => {
    const userAgent = req.headers.get('user-agent');

    if(!userAgent || !userAgent.includes('Postman')){
        return Res(403, null, "Access denied: not allowed")
    }

    return null
}