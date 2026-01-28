import  express  from "express";
import  db from "./data/db.js";

const app = express();
const PORT = 3030;
app.use(express.json());

app.get("/students", (req, res) => {
  const clss = req.query.class;
  const students = db.prepare("SELECT * FROM students where classes == ?").all(clss);
  res.status(200).json(students);
});
app.get("/subjects", (req, res) => {
  const name = req.query.name;
  const subjects = db.prepare("SELECT * FROM subjects where name == ?").all(name);
  res.status(200).json(subjects);
});

app.get("/students/:id", (req, res) => {
  const student = db.prepare("SELECT * FROM students WHERE id = ?").get(req.params.id);
  res.status(200).json(student);
});

app.post("/students", (req, res) => {
  const { name, age, classes } = req.body;
  const result = db.prepare("INSERT INTO students (name, age, classes) VALUES (?, ?, ?)").run(name, age, classes);
  res.status(201).json({ id: result.lastInsertRowid });
});


app.listen(PORT, () => {
  console.log("run"+PORT);
});
