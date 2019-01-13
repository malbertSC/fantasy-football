import { MutationResolvers } from "../generated/graphqlgen";
import { signup } from "./Mutations/user";
import { createLeague } from "./Mutations/league";

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    signup,
    createLeague,
    updateLeague: () => {throw new Error("not implemented")}
};
