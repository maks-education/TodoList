import { createTaskModel } from "../models/Tasks.js";
import {createUserModel} from "../models/User.js";

export async function modelsLoader() {
    await createUserModel()
    await createTaskModel()
}
