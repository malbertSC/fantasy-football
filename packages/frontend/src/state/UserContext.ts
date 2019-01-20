import React from "react";
import { CurrentUser } from "../types";

export interface UserState {
    isLoading: boolean;
    user: CurrentUser | undefined;
    signin: (user: CurrentUser) => void;
    signout: () => void;
}

const { Provider, Consumer } = React.createContext<UserState>({
    isLoading: true,
    user: undefined,
    signin: () => {},
    signout: () => {}
});
export { Provider as UserProvider, Consumer as UserConsumer };
