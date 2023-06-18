import UrlPattern from "url-pattern";
import { decodeAccessToken } from '../utils/jwt';
import { getUserById } from "../db/user";
import { sendError } from "h3"

export default defineEventHandler(async (event) => {
    const cookies = useCookies(event);
    const accessToken = cookies.accessToken;
  
    const endpoints = [ 
        '/api/auth/user',
        '/api/user/tweets',
        '/api/tweets',
        '/api/tweets/:id',
    ];

    const isHandledByThisMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint);

        return pattern.match(event.req.url);
    });

    if (!isHandledByThisMiddleware) {
        return 
    }

    // const token = event.req.headers['authorization'];

    const decoded = decodeAccessToken(accessToken);

    if (!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'unauthorized'
        }))
    }

    try {

        const userId = decoded.userId;
        const user = await getUserById(userId);

        event.context.auth = { user };

    } catch(err) {
        return
    }
});