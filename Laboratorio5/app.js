const Estudiantes = require('./src/estudiantes');
const bodyParser = require('body-parser')

const express = require('express');
const app = express();
app.use(bodyParser.json());
const st = new Estudiantes();

/**
 * Brings all students
 */
app.get('/estudiantes', (req, resp) => {
    resp.send(JSON.stringify(st.sudents))
});

/**
 * Brings specific student
 */

app.get('/estudiantes/:id', (req, resp) => {
    let ans = st.getSpecificStudent(req.params.id)
    resp.send(JSON.stringify(ans))
});

/**
 * Creates a new student
 */

app.post('/estudiantes', (req, resp) => {
    let ans = st.createStudent(req.body)
    resp.send(ans)
});

/**
 * Edits one student
 */
app.put('/estudiantes', (req, resp) => {
    let ans = st.editStudent(req.body)
    resp.send(ans)
});
/**
 * Deletes one student
 */

app.delete('/estudiantes/:id', (req, resp) => {
    let ans = st.deleteStudent(req.params.id)
    resp.send(JSON.stringify(ans))
});


app.listen(3000, () => {
    console.log("Rest API running on port 3000, By Hugo!")
}); 
