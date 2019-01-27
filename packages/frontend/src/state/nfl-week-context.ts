import React from "react";
import { GetWeekGames_nflGames } from "./__generated__/GetWeekGames";

export interface NFLWeekState {
    isLoading: boolean;
    nflGames: Array<GetWeekGames_nflGames> | undefined;
}

const { Provider, Consumer } = React.createContext<NFLWeekState>({
    isLoading: true,
    nflGames: undefined
});
export { Provider as NFLWeekProvider, Consumer as NFLWeekConsumer };
