import { SafeUser } from "./user";

export interface PrismaArgs<WhereInput, OrderByInput> {
    where?: WhereInput;
    orderBy?: OrderByInput;
    skip?: number;
    after?: string;
    before?: string;
    first?: number;
    last?: number;
}

// export interface SimpleModel<T, WhereInput, OrderByInput, WhereUniqueInput> {
//     find(user: SafeUser, args: PrismaArgs<WhereInput, OrderByInput>): Promise<T[]>;
//     findOne(user: SafeUser, whereUniqueInput: WhereUniqueInput): Promise<T>;
// }

export function getFilteredArgs<T, U, V>(args: PrismaArgs<T, U>, filter: V): PrismaArgs<T, U> {
    const filteredWhere: T = {
        ...args.where,
        ...filter
    };
    return {
        ...args,
        ...{where: filteredWhere}
    }
}
