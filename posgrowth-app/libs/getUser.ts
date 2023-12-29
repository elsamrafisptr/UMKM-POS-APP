import prisma from "./prismaClient";

export const getUserEmployee = async (userName: string) => {
    const employee = await prisma.user.findFirst({
        where: {
            AND: [
                {
                    role: "Employee",
                },
                {
                    username: userName,
                },
            ],
        },
    });
};
