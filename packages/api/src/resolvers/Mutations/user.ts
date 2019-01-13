import { prisma } from "@ffb/prisma";
import * as bcrypt from "bcrypt";
import { getSafeUser } from "../../models/user";

export async function signup(parent, { username, password }, ctx) {
    if (!username || !password) {
        throw new Error("username and password must both be provided");
    }
    if (await prisma.$exists.user({username})) {
        throw new Error("username already exists");
    }
    try {
        const passwordHash = bcrypt.hashSync(password, 10);
        const user = await prisma.createUser({username, passwordHash});
        return getSafeUser(user);
    } catch (error) {
        throw new Error("unable to create user");
    }
}
