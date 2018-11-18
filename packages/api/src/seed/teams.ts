import * as axios from "axios";
import { prisma, Nfl_teamCreateInput } from "@ffb/prisma"

interface NFLFeedTeam {
    teamId: string;
    abbr: string;
    cityState: string;
    fullName: string;
    nick: string;
}

const excludeTeamString = "Pro Bowl";

export async function loadTeams(year: number) {

    const teamsResponse = await axios.default.get(`https://feeds.nfl.com/feeds-rs/teams/${year}.json`);
    const nflFeedTeams: NFLFeedTeam[] = teamsResponse.data.teams;
    const filteredTeams = nflFeedTeams.filter(team => !team.fullName.includes(excludeTeamString));
    const teams = filteredTeams.map((nflFeedTeam) => {
        const team: Nfl_teamCreateInput = {
            code: nflFeedTeam.abbr,
            city: nflFeedTeam.cityState,
            name: nflFeedTeam.nick,
            full_name: nflFeedTeam.fullName,
            nfl_feed_id: nflFeedTeam.teamId
        }
        return team;
    })
    return Promise.all(teams.map(team => prisma.upsertNfl_team({
        where: {
            nfl_feed_id: team.nfl_feed_id
        },
        create: team,
        update: team
    })));
}
