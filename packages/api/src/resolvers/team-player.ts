import { Team_playerResolvers } from "../generated/graphqlgen";

export const Team_player: Team_playerResolvers.Type = {
    ...Team_playerResolvers.defaultResolvers,

    nfl_player: (parent, args, ctx) => {
        return ctx.db.team_player({id: parent.id}).nfl_player();
    },
    team: (parent, args, ctx) => {
        return ctx.db.team_player({id: parent.id}).team();
    }
};
