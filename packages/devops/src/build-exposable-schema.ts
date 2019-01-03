import { buildSchema, buildClientSchema, printSchema, graphqlSync, introspectionQuery } from "graphql";
import * as fs from "fs";

function main() {
    const sdl = fs.readFileSync("../prisma/prisma.graphql", "utf8");
    const graphqlSchemaObj = buildSchema(sdl);
    const result = graphqlSync(graphqlSchemaObj, introspectionQuery).data;
    const newSchema = getAPISafeSchema(result);
    const newGraphqlSchemaObj = buildClientSchema(newSchema);
    const sdlString = `# import *, Query.* from './custom.graphql'\n` + printSchema(newGraphqlSchemaObj);
    fs.writeFileSync("../api/api-schema.graphql", sdlString);
    // tslint:disable-next-line:no-console
    console.log("api-schema.graphql built")
}

// jank
// rfc: https://github.com/prisma/prisma/issues/2999
// function makeCollectionElementRequired(element: string) {
//     function addRequired(str, p1) {
//         const groups = str.split(p1);
//         return p1 + "!" + groups[1];
//     }
//     const regex = /: (\[\w*)\]!/g;
//     return element.replace(regex, addRequired);
// }

// tslint:disable-next-line:max-line-length
// const test = makeCollectionElementRequired("leagues(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [League]!");
// console.log(test)
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
    queryType.fields = queryType.fields.filter(type => !type.name.includes("Connection") && !(type.name === "node"));
    // queryType.fields = queryType.fields.map(field => {
    //     if (field.type.ofType && field.type.ofType.kind === "LIST") {
    //         const insideType = {...field.type.ofType.ofType}
    //         const newField = {
    //             ...field,
    //             ...{
    //                 type: {
    //                     ofType: {
    //                         kind: "NON_NULL",
    //                         name: null,
    //                         ofType: insideType
    //                     }
    //                 }
    //             }
    //         }
    //         // const newField = {...field};
    //         // newField.type.ofType.ofType.ofType = {
    //         //     kind: "NON_NULL",
    //         //     name: null,
    //         //     ofType: null
    //         // };
    //         console.log(newField.type.ofType);
    //         return newField
    //     }
    //     return field;
    // });
    const mutationType = apiTypes.find(type => type.name === "Mutation");
    mutationType.fields = mutationType.fields.filter(type => !(
        type.name.includes("Nfl") || type.name === "executeRaw"
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
