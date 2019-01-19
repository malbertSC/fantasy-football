import React from "react";
import { CurrentUser } from "../types";

export interface UserState {
    user: CurrentUser | undefined;
    setUser: (user: CurrentUser) => void;
}

const { Provider, Consumer } = React.createContext<UserState>({
    user: {} as any,
    setUser: () => {}
});
export { Provider as UserProvider, Consumer as UserConsumer };
