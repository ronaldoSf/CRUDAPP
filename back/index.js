//--------------- BETTER REQUIRE

var projectDir = __dirname;

module.exports = global.requireF = function(module) {
  return require(projectDir + "/" + module);
}

//--------------- IMPORTS

const express = require("express")

const util = require("./util/util.js")
const config = require("./util/config.js")
const UserService = require("./services/UserService.js")

//---------------- CONFIG
var app = express()

//---------------- SERVICES
UserService(app)


//---------------- ENDING
app.listen(config.serverPort)
console.log("Server Running")