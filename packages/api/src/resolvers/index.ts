import { Resolvers } from "../generated/graphqlgen"
import { Query } from "./query";
import { NflTeam } from "./nfl-team";
import { NflPlayer } from "./nfl-player";
import { LineupPlayer } from "./lineup-player";
import { Lineup } from "./lineup";
import { League } from "./league";
import { Mutation } from "./mutation";
import { Matchup } from "./matchup";
import { NflGame } from "./nfl-game";
import { FlipGamePlayer } from "./flip-game-players";
import { User } from "./user";
import { SafeUser } from "./safe-user";
import { LeagueLineup } from "./league-lineup";
import { LeagueMember } from "./league-members";
import { MatchupPlayer } from "./matchup-player";
import { prisma } from "@ffb/prisma";
import { getMatchups } from "../models";

export const resolvers: Resolvers = {
    Query,
    Mutation,
    NflTeam,
    NflPlayer,
    LineupPlayer,
    Lineup,
    League,
    LeagueLineup,
    LeagueMember,
    NflGame,
    FlipGamePlayer,
    Matchup,
    MatchupPlayer,
    User,
    SafeUser,
    Subscription: {
        matchup: {
            subscribe: async (parent, args, ctx) => {
                const subscription = await prisma.$subscribe.flipGamePlayer({
                    node: {game: {id: args.where.gameID}},
                });
                return subscription as any;
            },
            resolve: async (payload, args, ctx) => {
                return getMatchups(args.where.gameID);
            }
        }
    }
}
