import axios from "axios";

// todo: this shouldn't be hardcoded
const leagueSettings = {
    passing: {
        tds: 4,
        yds: .04,
        ints: -2,
        twoptm: 2
    },
    receiving: {
        tds: 6,
        yds: .1,
        twoptm: 2
    },
    rushing: {
        tds: 6,
        yds: .1,
        twoptm: 2
    },
    fumbles: {
        lost: -2
    }
}

async function getGameStats(gameEID: string) {
    const gameStatsResponse = await axios.get(`http://www.nfl.com/liveupdate/game-center/${gameEID}/${gameEID}_gtd.json`);
    return gameStatsResponse.data;
}

async function main() {
    const gameEID = "2019012001"; // TODO remove hardcode!
    const gameStats = await getGameStats(gameEID);
    parseStats(gameStats[gameEID]);
}

function parseStats(gameStats: any) {
    const teams = ["home", "away"];
    teams.forEach((team: any) => {
        parsePositionStats(gameStats[team].stats);
    })

}

function parsePositionStats(teamStats: any) {
    const passingPoints = calculateCategoryPoints(teamStats.passing, "passing");
    const receivingPoints = calculateCategoryPoints(teamStats.receiving, "receiving");
    const rushingPoints = calculateCategoryPoints(teamStats.rushing, "rushing");
    const fumblesPoints = calculateCategoryPoints(teamStats.fumbles, "fumbles");
    const playerPoints = combinePlayerPoints([passingPoints, receivingPoints, rushingPoints, fumblesPoints]);
    console.log(playerPoints);
}

interface PlayerPoints {
    gisID: string;
    points: number;
}
function combinePlayerPoints(pointsArrays: PlayerPoints[][]): PlayerPoints[] {
    console.log(pointsArrays);
    const combinedPlayerPoints: PlayerPoints[] = [];
    for (const pointsArray of pointsArrays) {
        for (const playerPoint of pointsArray) {
            const combinedPlayerPoint = combinedPlayerPoints.find((combinedPlayerPointIter) => combinedPlayerPointIter.gisID === playerPoint.gisID);
            if (combinedPlayerPoint) {
                combinedPlayerPoint.points += playerPoint.points;
            } else {
                combinedPlayerPoints.push(playerPoint);
            }
        }
    }
    return combinedPlayerPoints;

}

function calculateCategoryPoints(stats: any, category: string): PlayerPoints[] {
    console.log(stats);
    const categorySettings = leagueSettings[category];
    return Object.keys(stats).map((playerKey: string) => {
        const playerStats = stats[playerKey];
        const points = Object.keys(playerStats).map((statKey) => {
            if (categorySettings[statKey]) {
                return {
                    stat: statKey,
                    points: playerStats[statKey] * categorySettings[statKey]
                }
            }
        })
        return {
            gisID: playerKey,
            points: points.reduce((accum, current) => {
                if (current) accum += current.points;
                return accum;
            }, 0)
        }
    })
}

main();
