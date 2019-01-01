import { NflTeam, prisma } from "@ffb/prisma";

let _teams: NflTeam[];
async function getTeams(): Promise<NflTeam[]> {
    if (_teams) {return _teams};
    _teams = await prisma.nflTeams();
    return _teams;
}

export async function getTeamByFuzzyAbbreviation(abbreviation: string): Promise<NflTeam> {
    const teams = await getTeams();
    const nflAbbreviations = teamAbbreviationMap.filter(teamAbbreviation => {
        return teamAbbreviation.options.includes(abbreviation);
    });
    if (nflAbbreviations.length !== 1 ) throw new Error("Team abbreviation not found in map: " + abbreviation);
    const nflAbbreviation = nflAbbreviations[0];
    const teamsWithAbbreviation = teams.filter(team => {
        return team.code === nflAbbreviation.nflCode
    })
    if (teamsWithAbbreviation.length !== 1) throw new Error("Team abbreviation code lookup in teams failed: " + JSON.stringify(nflAbbreviation));
    return teamsWithAbbreviation[0];
}
export const teamAbbreviationMap = [
    {nflCode: "DAL", options: ["DAL"]},
    {nflCode: "CLE", options: ["CLE"]},
    {nflCode: "CHI", options: ["CHI"]},
    {nflCode: "BUF", options: ["BUF"]},
    {nflCode: "ATL", options: ["ATL"]},
    {nflCode: "BAL", options: ["BAL"]},
    {nflCode: "CIN", options: ["CIN"]},
    {nflCode: "CAR", options: ["CAR"]},
    {nflCode: "ARI", options: ["ARI"]},
    {nflCode: "DEN", options: ["DEN"]},
    {nflCode: "LAC", options: ["LAC"]},
    {nflCode: "GB", options: ["GB"]},
    {nflCode: "JAX", options: ["JAX", "JAC"]},
    {nflCode: "HOU", options: ["HOU"]},
    {nflCode: "KC", options: ["KC"]},
    {nflCode: "LA", options: ["LA", "LAR"]},
    {nflCode: "IND", options: ["IND"]},
    {nflCode: "DET", options: ["DET"]},
    {nflCode: "MIN", options: ["MIN"]},
    {nflCode: "MIA", options: ["MIA"]},
    {nflCode: "NO", options: ["NO"]},
    {nflCode: "NYJ", options: ["NYJ"]},
    {nflCode: "NYG", options: ["NYG"]},
    {nflCode: "NE", options: ["NE"]},
    {nflCode: "PHI", options: ["PHI"]},
    {nflCode: "PIT", options: ["PIT"]},
    {nflCode: "OAK", options: ["OAK"]},
    {nflCode: "SEA", options: ["SEA"]},
    {nflCode: "SF", options: ["SF"]},
    {nflCode: "TEN", options: ["TEN"]},
    {nflCode: "TB", options: ["TB"]},
    {nflCode: "WAS", options: ["WAS"]}
]
