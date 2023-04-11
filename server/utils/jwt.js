import jwt from 'jsonwebtoken'

const generateAccessToken = (user) => {
    const config = useRuntimeConfig()

    return jwt.sign({userId: user.id}, config.jwtAccessSecret, {
        expiresIn:  '10m'
    })
}

const generateRefreshToken = (user) => {
    const config = useRuntimeConfig();

    return jwt.sign({userId: user.id}, config.jwtRefreshSecret, {
        expiresIn:  '4h'
    })
}

export const decodeRefreshToken = (token) => {
    const config = useRuntimeConfig();

    try {
        return jwt.verify(token, config.jwtRefreshSecret);
    } catch (err) {
        return err;
    }
}

export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        accessToken,
        refreshToken,
    }
}

export const sendRefreshToken = (event, token) => {
    setCookie(event.res, "refreshToken", token, {
        httpOnly: true,
        sameSite: true,
        // secure: true
    })
}