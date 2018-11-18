import { Nfl_playerResolvers } from "../generated/graphqlgen";

export const Nfl_player: Nfl_playerResolvers.Type = {
    ...Nfl_playerResolvers.defaultResolvers,

    nfl_team: (parent, args, ctx) => {
        return ctx.db.nfl_player({id: parent.id}).nfl_team();
    },
    team_players: (parent, args, ctx) => {
        return ctx.db.nfl_player({id: parent.id}).team_players();
    }
};
