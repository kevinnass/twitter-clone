import { sendError } from "h3"
import { createUser } from "~~/server/db/user";
import { userTransformer } from "~~/server/transformers/user";

export default defineEventHandler(async (event) => {
    const body = await useBody(event);

    const { username, email, password, repeatPassword, name } = body;
    console.log(username, email, password, repeatPassword, name);
    // If any field is empty
    if (!username || !email || !password || !name || !repeatPassword) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }));
    }

    // If password and password confirmation do not match
    if (password !== repeatPassword) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Password do not match'}));
    }

    // init User object
    const userData = {
        username: username,
        email: email,
        password: password,
        name,
        profileImage: 'https://picsum.photos/200/200'
    }

    // add user in the database via prisma
    const user = await createUser(userData)

    return {
        body: userTransformer(user)
    }
});