import express from 'express';
import cors from 'cors';
import { Student } from './student.js';

const app = express();
const port = process.env.PORT || 8080;

const students = [
  new Student(108, "Peter", 972757056),
  new Student(109, "Jack", 465756767),
  new Student(110, "Mark", 78978564),
];

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(student => student.id === studentId);
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

app.post('/students', (req, res) => {
  const newStudent = new Student(parseInt(req.body.id), req.body.name, req.body.phone);
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const updatedStudent = students.find(student => student.id === studentId);
  if (updatedStudent) {
    updatedStudent.name = req.body.name || updatedStudent.name;
    updatedStudent.phone = req.body.phone || updatedStudent.phone;
    res.json(updatedStudent);
  } else {
    res.status(404).send('Student not found');
  }
});

app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex(student => student.id === studentId);
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Student not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
