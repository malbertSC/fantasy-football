import { MutationResolvers } from "../generated/graphqlgen";
import { prisma } from "@ffb/prisma";
import * as bcrypt from "bcrypt";
import { getSafeUser } from "../models/user";

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    signup: async (parent, { username, password }, ctx) => {
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
};
