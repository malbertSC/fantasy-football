import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    createLeague: (parent, args, ctx) => {
        return ctx.db.createLeague(args.data);
    },
    createTeam: (parent, args, ctx) => {
        return ctx.db.createTeam(args.data);
    },
    createTeamPlayer: (parent, args, ctx) => {
        return ctx.db.createTeamPlayer(args.data);
    },
    updateLeague: (parent, args, ctx) => {
        return ctx.db.updateLeague(args);
    },
    updateTeam: (parent, args, ctx) => {
        return ctx.db.updateTeam(args);
    },
    updateTeamPlayer: (parent, args, ctx) => {
        return ctx.db.updateTeamPlayer(args);
    },
    deleteLeague: (parent, args, ctx) => {
        return ctx.db.deleteLeague(args.where);
    },
    deleteTeam: (parent, args, ctx) => {
        return ctx.db.deleteTeam(args.where);
    },
    deleteTeamPlayer: (parent, args, ctx) => {
        return ctx.db.deleteTeamPlayer(args.where);
    },
    upsertLeague: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    upsertTeam: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    upsertTeamPlayer: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    updateManyLeagues: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    updateManyTeams: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    deleteManyLeagues: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    deleteManyTeams: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    },
    deleteManyTeamPlayers: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    }
};
