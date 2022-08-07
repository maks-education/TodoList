import { crypto } from "../crypto.js";
import { User } from "../models/User.js";

export async function createUser(body) {
    try{
        const hash = await crypto(body.password)
        User.create({
            firstName: body.name,
            lastName: body.surname,
            login: body.login,
            email: body.email,
            password: hash
        })
    }catch {
        console.log("error in the user creation process")
    }
}