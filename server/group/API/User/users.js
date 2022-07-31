const express = require('express')
const app = express()
const { client } = require('../../Settings of Server/client')

const { initialization } = require("./initializations")
const { profile } = require("./profile")


function users (app, client) {
    initialization(app, client)
    profile(app, client)
}module.exports.users = users

