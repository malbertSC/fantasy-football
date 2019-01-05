import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  doSomething: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
