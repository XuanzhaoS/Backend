require("dotenv").config();
//console.log(process.env);

// Import modules
const express = require("express");
const cors = require("cors");
const { todoRouter } = require("./routes/todo.js");
// Adding require definition
//const { Pool } = require("pg");
//const { query } = require("./helpers/db.js");

// Create application instance
const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());
// extracting parameters from the URL address
app.use(express.urlencoded({ extended: false }));
app.use("/", todoRouter);
// Set port number
// const port = 3001;
const port = process.env.PORT;

// Define route
//app.get("/", (req, res) => {
//res.status(200).json({ result: "success" });
//});

// Implement the server
app.listen(port);

// // Implement a route handler when client requests the root path
// app.get("/", async (req, res) => {
//   console.log(query);
//   try {
//     const result = await query("select * from task");
//     const rows = result.rows ? result.rows : [];
//     res.status(200).json(rows);
//   } catch (error) {
//     console.log(error);
//     res.statusMessage = error;
//     res.status(500).json({ error: error });
//   }
// pool.query("select * from task", (error, result) => {
//   if (error) {
//     res.status(500).json({ error: error.message });
//   }
//   res.status(200).json(result.rows);
// });
// });

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "todo",
//   password: "Zx83112789",
//   port: 5432,
// });
// const openDb = () => {
//   const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//   });
//   return pool;
// };

// app.post("/new", async (req, res) => {
//   try {
//     const result = await query(
//       "insert into task (description) values ($1) returning *",
//       [req.body.description]
//     );
//     res.status(200).json({ id: result.rows[0].id });
//   } catch (error) {
//     console.log(error);
//     res.statusMessage = error;
//     res.status(500).json({ error: error });
//   }
// pool.query(
//   "insert into task (description) values ($1) returning *",
//   [req.body.description],
//   (error, result) => {
//     if (error) {
//       res.status(500).json({ error: error.message });
//     } else {
//       res.status(200).json({ id: result.rows[0].id });
//     }
//   }
// );
// });

// Implement delete function
// app.delete("/delete/:id", async (req, res) => {
//   // const pool = openDb();
//   const id = number(req.params.id);
//   try {
//     const result = await query("delete from task where id = $1", [id]);
//     res.status(200).json({ id: id });
//   } catch (error) {
//     console.log(error);
//     res.statusMessage = error;
//     res.status(500).json({ error: error });
//   }
// const id = parseInt(req.params.id);
// pool.query("delete from task where id = $1", [id], (error, result) => {
//   if (error) {
//     res.status(500).json({ error: error.message });
//   } else {
//     res.status(200).json({ id: id });
//   }
// });
// });
