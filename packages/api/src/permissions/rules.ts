import { rule } from "graphql-shield";
import { Context } from "types";

export const isLoggedIn = rule()(async (parent, args, ctx: Context, info) => {
    if (ctx.user) return true
    return false;
})
