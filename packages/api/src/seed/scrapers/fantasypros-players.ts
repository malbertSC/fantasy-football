import { NflPlayer, prisma } from "@ffb/prisma";

export class PlayerMissingError extends Error {
    constructor(playerName: string) {
        super(`Unable to find player: ${playerName}`);
    }
};
export class PlayerInvalidError extends Error {
    constructor(playerName: string, position: string) {
        super(`Known but invalid player for position: ${playerName}, ${position}`);
    }
};

let _players: NflPlayer[];
let _position: string;
async function getPlayers(position: string): Promise<NflPlayer[]> {
    if (_players && position === _position) { return _players };
    _players = await prisma.nflPlayers({where: {position}});
    _position = position;
    console.log("GOT PLAYERS", _players.length);
    return _players;
}

export async function getPlayerByFuzzyName(playerName: string, position: string): Promise<NflPlayer> {
    const nflPlayers = await getPlayers(position);
    let filteredPlayers = nflPlayers.filter(nflPlayer => {
        return nflPlayer.display_name === playerName;
    });
    if (filteredPlayers.length !== 1) {
        const filteredPlayerAliases = playerAliasMap.filter(alias => alias.options.includes(playerName));
        if (filteredPlayerAliases.length !== 1) {
            if (offPositionPlayers.some(offPositionPlayer => {
                return offPositionPlayer.fantasyProsPlayerName === playerName
                    && offPositionPlayer.position === position
            })) {
                throw new PlayerInvalidError(playerName, position);
            }
            throw new PlayerMissingError(playerName);
        }
        filteredPlayers = [await getPlayerByFuzzyName(filteredPlayerAliases[0].nflPlayerName, position)];
    }
    return filteredPlayers[0];
}

const playerAliasMap = [
    { nflPlayerName: "Mitchell Trubisky", options: ["Mitch Trubisky"] },
    { nflPlayerName: "Robert Griffin III", options: ["Robert Griffin"] },
    { nflPlayerName: "Ronald Jones", options: ["Ronald Jones II"] },
    { nflPlayerName: "DeVante Parker", options: ["Devante Parker"] },
    { nflPlayerName: "T.J. Jones", options: ["TJ Jones"] },
    { nflPlayerName: "Chris Herndon", options: ["Chris Herndon IV"] },
    { nflPlayerName: "KhaDarel Hodge", options: ["Khadarel Hodge"] },
    { nflPlayerName: "Matthew Slater", options: ["Matt Slater"] },
    { nflPlayerName: "Steven Mitchell", options: ["Steven Mitchell Jr."] },
    { nflPlayerName: "Henry Krieger-Coble", options: ["Henry Krieger Coble"] },
]

const offPositionPlayers = [
    { fantasyProsPlayerName: "Cordarrelle Patterson", position: "RB" },
    { fantasyProsPlayerName: "Kyle Juszczyk", position: "RB"}, // @TODO fix, this is a fullback
    { fantasyProsPlayerName: "James Develin", position: "RB"} // @TODO fix, this is a fullback

]
