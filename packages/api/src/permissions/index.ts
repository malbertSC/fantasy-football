import { shield } from "graphql-shield";
import * as rules from "./rules";
export const permissions = shield({
    Query: {
        matchups: rules.isLoggedIn
    }
}, {
    fallbackError: new Error("Unauthorized")
})
