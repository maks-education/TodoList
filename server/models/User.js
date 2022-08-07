import { DataTypes, Model } from 'sequelize';
import {sequelize} from "../loaders/client.js";

export class User extends Model {}

export async function createUserModel() {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize, 
        modelName: 'userdata'
    });

    await User.sync()
}
