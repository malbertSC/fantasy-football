import React from "react";
import { CurrentUser } from "../types";

export interface UserState {
    isLoading: boolean;
    user: CurrentUser | undefined;
    setUser: (user: CurrentUser) => void;
}

const { Provider, Consumer } = React.createContext<UserState>({
    isLoading: true,
    user: undefined,
    setUser: () => {}
});
export { Provider as UserProvider, Consumer as UserConsumer };
