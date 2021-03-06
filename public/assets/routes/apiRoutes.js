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

    // Post newNote with new ID # based on the total number of notes, starting at 1
    server.post("/api/notes", function(req, res) {
        this.database = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        let newNote = req.body;
        let noteID = (this.database.length+1).toString();
        newNote.id = noteID;
        this.database.push(newNote)
        fs.writeFileSync("./db/db.json", JSON.stringify(this.database));
        res.json(this.database);
        console.log(`New note titled "${newNote.title}" has been saved & added to database under ID# ${newNote.id}`);
    });

    // Delete by id req, res
    server.delete("/api/notes/:id", function(req, res) {
      this.database = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
      let selectedNote = req.params.id;
      let newID = 1

      // Return notes that weren't selected with filter function
      this.database = this.database.filter(otherNotes => {
        return otherNotes.id != selectedNote;
      });
      console.log(`Deleted note with ID#: ${selectedNote}`);

      // Rewrite ids after any deletion by incrementing them by 1
      for(otherNotes of this.database) {
        otherNotes.id = newID.toString();
        newID++;
      };
      // Write changes to db file and respond with json data
      fs.writeFileSync("./db/db.json", JSON.stringify(this.database));
      res.json(this.database);
    });
};