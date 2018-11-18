import { Nfl_teamResolvers } from "../generated/graphqlgen";

export const Nfl_team: Nfl_teamResolvers.Type = {
    ...Nfl_teamResolvers.defaultResolvers,

    nfl_players: (parent, args, ctx) => {
        return ctx.db.nfl_players({where: {
            nfl_team: {
                id: parent.id
            }
        }});
    }
};
