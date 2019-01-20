import React from "react";
import { UserConsumer } from "../state/UserContext";

export const LoggedInUser: React.SFC = () => {
    return <UserConsumer>{({isLoading, user, signout}) => {
        if (isLoading || !user) return
        return (
            <div>
                <span>logged in user: {user.username}</span>
                <button onClick={(e) => {
                    e.preventDefault();
                    signout();
                }}>logout</button>
            </div>
        )
    }}
    </UserConsumer>
}
