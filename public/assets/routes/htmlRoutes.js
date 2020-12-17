const path = require("path");

// Routing HTML GET requests
module.exports = function(server) {
    server.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./../../index.html"));
    });

    server.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./../../notes.html"));
    });

    server.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./../../index.html"));
    });
}