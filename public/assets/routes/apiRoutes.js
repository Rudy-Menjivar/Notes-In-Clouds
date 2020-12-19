// Dependencies of npm packages for full server functionality
const path = require("path");
const fs = require("fs");
// Link to notes database
const dbLink = "./../../../db/db.json";

// Notes database Class
class NotesDB {
  constructor() {  
    this.database = [];
    }
  }

module.exports = function(server) {
    // Retrieve notes so they render in text area div
    server.get("/api/notes", function(req, res) {
        res.sendFile(path.join(__dirname, dbLink));
    });

};