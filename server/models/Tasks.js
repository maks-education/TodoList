import { DataTypes, Model } from 'sequelize';
import {sequelize} from "../loaders/client.js";

export class Task extends Model {}

export async function createTaskModel() {
    Task.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        login: {//Can be changed to an "executive"
            type: DataTypes.STRING(100),
            primaryKey: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(256)
        },
        content: {
            type: DataTypes.STRING(3000)
        },
        status: {
            type: DataTypes.STRING
        },
        deadline: {
            type: DataTypes.DATE
        },
        creationDate: {
            type: DataTypes.DATE
        },
        completeDate: {
            type: DataTypes.DATE
        }

    }, {
        sequelize, 
        modelName: 'tasks'
    });

    await Task.sync()
}