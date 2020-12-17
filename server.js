// Dependencies of npm packages for full server functionality
var express = require("express");
// Tells node to create an express server
var server = express();
// Set public folder as static to serve its static assets
server.use(express.static('public'));