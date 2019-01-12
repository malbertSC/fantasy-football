import { TeamResolvers } from "../generated/graphqlgen";

export const Team: TeamResolvers.Type = {
    ...TeamResolvers.defaultResolvers,

    league: (parent, args, ctx) => {
        return ctx.db.team({id: parent.id}).team_players();
    },
    team_players: (parent, args, ctx) => {
        return ctx.db.team({id: parent.id}).team_players();
    },
    owner_user: (parent, args, ctx) => {
        return ctx.db.team({id: parent.id}).owner_user();
    }
};
