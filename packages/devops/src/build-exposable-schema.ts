import { buildSchema, buildClientSchema, printSchema, graphqlSync, introspectionQuery } from "graphql";
import * as fs from "fs";

function main() {
    const sdl = fs.readFileSync("../prisma/schema.graphql", "utf8");
    const graphqlSchemaObj = buildSchema(sdl);
    const result = graphqlSync(graphqlSchemaObj, introspectionQuery).data;
    const newSchema = getAPISafeSchema(result);
    const newGraphqlSchemaObj = buildClientSchema(newSchema);
    const sdlString = printSchema(newGraphqlSchemaObj);
    fs.writeFileSync("../api/api-schema.graphql", sdlString);
    console.log("api-schema.graphql built")
}

function getAPISafeSchema(introspectionResult) {
    const apiTypes = introspectionResult.__schema.types
        .filter(type => !["Subscription", "PageInfo"].includes(type.name))
        .filter(type => !(
                type.name.includes("Connection")
                || type.name.includes("Aggregate")
                || type.name.includes("Edge")
                || type.name.includes("SubscriptionPayload")
                || type.name.includes("PreviousValues")
            )
        );
    const queryType = apiTypes.find(type => type.name === "Query");
    queryType.fields = queryType.fields.filter(type => !type.name.includes("Connection"));
    const mutationType = apiTypes.find(type => type.name === "Mutation");
    mutationType.fields = mutationType.fields.filter(type => !(
            type.name.includes("Nfl_") || type.name === "executeRaw"
        )
    );
    return {
        ...introspectionResult,
        ...{
            __schema: {
                types: apiTypes
            }
        }
    };
}

main();
