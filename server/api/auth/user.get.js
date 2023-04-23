import { userTransformer } from "~~/server/transformers/user";

export default defineEventHandler(async (event) => {
    const user = event.context.auth?.user;

    return {
        user: userTransformer(user),
    }
})