// Dependencies of npm packages for full server functionality
var express = require("express");
// Tells node to create an express server
var server = express();
// Set public folder as static to serve its static assets
server.use(express.static('public'));
// Sets whatever environment var port, or 8080 if nothing's available
const PORT = process.env.PORT || 8080;
