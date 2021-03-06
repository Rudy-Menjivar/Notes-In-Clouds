// Dependencies of npm packages for full server functionality
var express = require("express");
// Tells node to create an express server
var server = express();
// Set public folder as static to serve its static assets
server.use(express.static('public'));
// Sets whatever environment var port, or 8080 if nothing's available
const PORT = process.env.PORT || 8080;

// For Express server to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Router API & HTML map
require("./public/assets/routes/apiRoutes")(server);
require("./public/assets/routes/htmlRoutes")(server);

// Listener code to start server
server.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});