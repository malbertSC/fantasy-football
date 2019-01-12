import { Prisma } from "@ffb/prisma";
import { User } from "models";

export interface Context {
  db: Prisma,
  user: User
}
