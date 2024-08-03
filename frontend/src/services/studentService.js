import { Config } from "../config/config";
import { Student } from "../models/student";

async function fetchStudent(id) {
  let endpoint = `http://${Config.host}${Config.studentPath}/${id}`;
  let bodyJson = await fetch(endpoint)
    .then((reponse) => { return reponse.json() });
  return new Student(bodyJson.id, bodyJson.name, bodyJson.phone);
}

async function fetchStudents() {
  let endpoint = `http://${Config.host}${Config.studentPath}`;
  let bodyJson = await fetch(endpoint)
    .then((reponse) => { return reponse.json() });
  return bodyJson.map((element) => { return new Student(element.id, element.name, element.phone) })
}

async function createStudent(id, name, phone) {
  const data = {
    id: id,
    name: name,
    phone: phone
  };
  let endpoint = `http://${Config.host}${Config.studentPath}`;
  await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => { return response.json() })
}

async function updateStudent(id, name, phone) {
  const data = {
    name: name,
    phone: phone
  };
  let endpoint = `http://${Config.host}${Config.studentPath}/${id}`;
  await fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => { return response.json() })
}

async function deleteStudent(id) {
  let endpoint = `http://${Config.host}${Config.studentPath}/${id}`;
  await fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => { return response.status })
}

export { fetchStudent, fetchStudents, createStudent, updateStudent, deleteStudent };