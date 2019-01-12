import { UserWhereUniqueInput, User, prisma } from "@ffb/prisma";

export interface SafeUser {
    id: number
    username: string
}

export async function getUser(userUnique: UserWhereUniqueInput): Promise<SafeUser> {
    const user = await prisma.user(userUnique);
    return getSafeUser(user);
}

export async function getUserWithPasswordHash(userUnique: UserWhereUniqueInput): Promise<User> {
    return prisma.user(userUnique);
}

export function getSafeUser(user: User): SafeUser {
    const cleanUser = {...user};
    delete cleanUser.passwordHash;
    return cleanUser;
}
