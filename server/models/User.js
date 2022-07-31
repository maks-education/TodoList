import { DataTypes, Model } from 'sequelize';
import {sequelize} from "../loaders/client.js";

export class User extends Model {}

export async function createUserModel() {
    User.init({
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User' // We need to choose the model name
    });

    await User.sync()
}
