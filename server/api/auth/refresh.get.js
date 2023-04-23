import { getRefreshTokenByToken } from '~~/server/db/refreshToken'
import { getUserById } from '~~/server/db/user';
import { decodeRefreshToken, generateTokens, sendAccessToken } from '~~/server/utils/jwt';

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
        const user = await getUserById(token.userId);
        const { accessToken } = generateTokens(user);
        sendAccessToken(event, accessToken);

        return {
            accessToken: accessToken,
        }

    } catch (err) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Unable to refresh the token'
        }))
    }
});