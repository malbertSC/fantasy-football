import { BasicStrategy } from "passport-http";
import * as bcrypt from "bcrypt";
import { getUserWithPasswordHash, getSafeUser } from "../models/user";

export const basicStrategy = new BasicStrategy(async (username, password, done) => {
    try {
        const user = await getUserWithPasswordHash({username});
        if (!isPasswordValid(password, user.passwordHash)) {
            throw new Error();
        }
        return done(null, getSafeUser(user));
    } catch (error) {
        done("username or password invalid");
    }
});

function isPasswordValid(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
}
