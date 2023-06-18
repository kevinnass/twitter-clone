import { prisma } from ".";


export const createMediaFile = (fileData) => {
    return prisma.mediaFile.create({
        data: fileData,
    });
};