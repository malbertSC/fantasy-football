import "reflect-metadata";
import { seed } from "./seed";
import { GraphQLServer } from "graphql-yoga";
import { prisma } from "@ffb/prisma";
import { resolvers } from "./resolvers";

async function main() {
    try {
        await seed();
        const server = new GraphQLServer({
            typeDefs: "./api-schema.graphql",
            resolvers,
            context: {
                db: prisma,
            },
        } as any)

        server.start(() => console.log("Server is running on http://localhost:4000"))

    } catch (err) {
        console.error(err);
        throw err;
    }
}

main();
