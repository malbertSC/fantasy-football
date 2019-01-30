import { shield } from "graphql-shield";
import * as rules from "./rules";
import { Mutation } from "../resolvers/mutation";

const mutationRules: any = Object.keys(Mutation).reduce((accum, mutationKey) => {
    accum[mutationKey] = rules.isLoggedIn;
    return accum;
}, {});
delete mutationRules.signup;
export const permissions = shield({
    Query: {
        currentUser: rules.isLoggedIn
    },
    Mutation: mutationRules
}, {
    fallbackError: new Error("Unauthorized")
})
