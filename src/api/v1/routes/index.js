const client = require("./client.route");
const authenticate = require("./authenticate.route");
const resource = require("./resource.route");

module.exports = [client, authenticate, resource];
