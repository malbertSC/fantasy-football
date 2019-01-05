import { Resolvers } from "../generated/graphqlgen"
import { Query } from "./query";
import { NflTeam } from "./nfl-team";
import { NflPlayer } from "./nfl-player";
import { TeamPlayer } from "./team-player";
import { Team } from "./team";
import { League } from "./league";
import { Mutation } from "./mutation";
import { Matchup } from "./matchup";
import { NflGame } from "./nfl-game";
import { FlipGamePlayer } from "./flip-game-players";

export const resolvers: Resolvers = {
    Query,
    Mutation,
    NflTeam,
    NflPlayer,
    TeamPlayer,
    Team,
    League,
    NflGame,
    FlipGamePlayer,
    Matchup
}
