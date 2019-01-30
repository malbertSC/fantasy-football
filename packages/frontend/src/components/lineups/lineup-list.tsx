import React from "react";
interface Props {
    lineups: Array<LineupListLineup>;
}

export interface LineupListLineup {
    id: number;
    name: string;
    nfl_game: {
        away_team: {
            full_name: string;
        },
        home_team: {
            full_name: string;
        }
    },
    owner_user: {
        username: string;
    }
}

export const LineupList: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            {props.lineups.map((lineup) => {
                if (lineup) {
                    return <div key={lineup.id}>
                        <div>{lineup.owner_user.username}</div>
                        <div>{lineup.nfl_game.away_team.full_name} vs. {lineup.nfl_game.home_team.full_name}</div>
                    </div>
                }
                return <div></div>
            })}
        </div>
    )
}
