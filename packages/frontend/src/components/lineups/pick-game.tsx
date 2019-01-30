import React from "react";
import { NFLWeekConsumer } from "../../state/nfl-week-context";
import { GetWeekGames_nflGames } from "../../state/__generated__/GetWeekGames";
interface Props {
    onPick: (nflGame: GetWeekGames_nflGames) => void;
}
export const PickGame: React.SFC<Props> = (props) => {
    return (
        <NFLWeekConsumer>{({nflGames, isLoading}) => {
            if (isLoading) return <div>loading nfl week</div>
            if (!nflGames) return <div>problem loading nfl games</div>
            return nflGames.map((nflGame) => {
                return (
                    <div key={nflGame.id}>
                        <div>{nflGame.away_team.full_name} vs. {nflGame.home_team.full_name}</div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            props.onPick(nflGame);
                        }}>Pick 'em</button>
                    </div>
                )
            })
        }}</NFLWeekConsumer>
    );
}
