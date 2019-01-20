import React from "react";
import { UserConsumer } from "../state/UserContext";

export const LoggedInUser: React.SFC = () => {
    return <UserConsumer>{({user}) => (
       <div>logged in user: {user ? user.username + user.id : ""}</div>
    )}
    </UserConsumer>
}
