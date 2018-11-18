import { Resolvers } from "../generated/graphqlgen"
import { Query } from "./query";
import { Nfl_team } from "./nfl-team";
import { Nfl_player } from "./nfl-player";
import { Team_player } from "./team-player";
import { Team } from "./team";
import { League } from "./league";

export const resolvers: Resolvers = {
    Query,
    Nfl_team,
    Nfl_player,
    Team_player,
    Team,
    League
}
