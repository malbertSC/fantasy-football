import { Prisma } from "@ffb/prisma";
import { SafeUser } from "models";

export interface Context {
  db: Prisma,
  user: SafeUser
}
