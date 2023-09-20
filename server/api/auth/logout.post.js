import { removeRefreshToken } from "~~/server/db/refreshToken";
import { sendRefreshToken } from "~~/server/utils/jwt";


export default defineEventHandler(async (event) => {

    try {
        const cookies = useCookies(event);
        const refreshToken = cookies.refreshToken;

        //remove Refresh token
        await removeRefreshToken(refreshToken);
    } catch (err) {

    }

    sendRefreshToken(event.res, null);

    return {message: 'Done'}
});