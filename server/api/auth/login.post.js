import bcrypt from "bcrypt";
import { createRefreshToken} from "~~/server/db/refreshToken";
import { getUserByUsername } from "~~/server/db/user";
import { userTransformer } from "~~/server/transformers/user";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";

export default defineEventHandler(async (event) => {
    const body = await useBody(event);

    const { username, password } = body;

    // If any field is empty
    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        }))
    }

    // Is the user registered ?
    const user = await getUserByUsername(username)
    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'username do not exist'
        }))
    }

    // Compare password
    const doesPasswordsMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordsMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'password do not match'
        }))
    }

    //Generate tokens
    const { accessToken, refreshToken } = generateTokens(user);

    //Save refreshToken in db
    await createRefreshToken({
        token: refreshToken,
        userId: user.id,

    });

    //Add cookie http only
    sendRefreshToken(event, refreshToken);

    return {
        accessToken: accessToken,
        user: userTransformer(user),
    }
});