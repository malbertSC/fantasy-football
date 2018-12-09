import { NflTeamResolvers } from "../generated/graphqlgen";

export const NflTeam: NflTeamResolvers.Type = {
    ...NflTeamResolvers.defaultResolvers,

    nfl_players: (parent, args, ctx) => {
        return ctx.db.nflPlayers({where: {
            nfl_team: {
                id: parent.id
            }
        }});
    }
};
