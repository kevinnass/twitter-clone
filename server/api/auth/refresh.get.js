import { getRefreshTokenByToken } from '~~/server/db/refreshToken'
import { getUserById } from '~~/server/db/user';
import { decodeRefreshToken } from '~~/server/utils/jwt';

export default defineEventHandler(async (event) => {
    const cookies = useCookies(event)

    const refreshToken = cookies.refreshToken

    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const rToken = await getRefreshTokenByToken(refreshToken);

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const token = decodeRefreshToken(refreshToken);

    try {
        const user = await getUserById(token.userId)
        return {
            user: user
        }
    } catch (err) {}

    return {
        refresh: token,
    }
});