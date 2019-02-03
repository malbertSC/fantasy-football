import "reflect-metadata";
import "dotenv";
import { seed } from "./seed";
import { GraphQLServer } from "graphql-yoga";
import { prisma } from "@ffb/prisma";
import { resolvers } from "./resolvers";
import { permissions } from "./permissions";
import { basicStrategy } from "./strategies/basic";
import passport = require("passport");

async function main() {
    try {
        await seed();
        const server = new GraphQLServer({
            typeDefs: "./api-schema.graphql",
            resolvers,
            middlewares: [permissions],
            context: req => ({
                db: prisma,
                user: req.request ? req.request.user : undefined
            }),
        } as any);
        server.options.debug = false;
        passport.use("basic", basicStrategy);
        server.express.use(passport.initialize());

        server.express.post("/", (req: any, res, next) => {
            passport.authenticate("basic", { session: false }, (err, user, info) => {
                req.authenticated = !!user;
                req.user = user;
                next();
            })(req, res, next)
        });

        server.start(() => console.log("Server is running on http://localhost:4000"))

    } catch (err) {
        console.error(err);
        throw err;
    }
}

main();
