require('dotenv').config();

var mysql = require("mysql2");
var con = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.database,
});

const createNote = async (req, res) => {
  try {
    let input = req.body;
    console.log("Hello");
    console.log(input);

    let insertQuery = `insert into notes (title, description, Date) values( ${JSON.stringify(
      input.title
    )}, ${JSON.stringify(input.description)}, ${JSON.stringify(input.Date)});`;

    con.query(insertQuery, function (err, result, fields) {

      if (err) { return res.status(400).send({ message: err.message });}
      console.log(result);
      return res.status(201).send({ message: "Done" });
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    con.query("select * from notes;", function (err, result, fields) {
      if (err) throw err;

      return res.status(200).send({ data: result });
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    let { id } = req.query;
    console.log(id);

    let DeleteQuery = `delete from notes where id=${id};`;

    con.query(DeleteQuery, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      return res.status(200).send({ message: "Deleted" });
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { createNote, getNotes, deleteNote };
