import {createUserModel} from "../models/User.js";

export async function modelsLoader() {
    await createUserModel()
}
