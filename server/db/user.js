import { prisma } from ".";
import bcrypt from "bcrypt";

export const createUser = (userData) => {
    // get password from user data and hash it
    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }
    return prisma.user.create({
        data: finalUserData
    })
}

// get user by his username(unique)
export const getUserByUsername = (username) => {
    return prisma.user.findUnique({
        where: { 
            username
        }
    })
}

export const getUserById = (userId) => {
    return prisma.user.findUnique({
        where: { 
            userId
        }
    })
}