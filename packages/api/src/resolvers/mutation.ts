import { MutationResolvers } from "../generated/graphqlgen";
import { signup } from "./Mutations/user";
import { createLeague, createLeagueMember, updateLeagueName, deleteLeagueMember } from "./Mutations/league";

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    signup,
    createLeague,
    updateLeagueName,
    createLeagueMember,
    deleteLeagueMember
};
