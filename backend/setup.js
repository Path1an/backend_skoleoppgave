const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./ruterapp.db", sqlite3.OPEN_CREATE, (err) => {
  console.log(err);
});
