import { DataTypes, Model } from 'sequelize';
import {sequelize} from "../loaders/client.js";

export class Task extends Model {}

export async function createTaskModel() {
    Task.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        executor: {
            type: DataTypes.STRING(100),
        },
        author: {
            type: DataTypes.STRING,
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
        modelName: 'Task'
    });
    await Task.sync()
}