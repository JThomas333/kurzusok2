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
  const clss = req.query.class;
  const subjects = db.prepare("SELECT * FROM subjects where name == ?").all(clss);
  res.status(200).json(subjects);
});

// app.get("/students/:id", (req, res) => {
//   const clss = req.credit.class 
//    const students = db.prepare("SELECT * FROM students WHERE id = ?").get(req.params.id);
  
//   const student = db

//   
// });




app.listen(PORT, () => {
  console.log("run"+PORT);
});
