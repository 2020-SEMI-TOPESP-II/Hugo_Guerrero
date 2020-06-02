const Estudiantes = require('./src/estudiantes');

const express = require('express');
const app = express();
const st = new Estudiantes();

app.get('/estudiantes', (req, resp) => {
    resp.send(JSON.stringify(st.sudents))
});


app.get('/estudiantes/:id', (req, resp) => {
    let ans = st.getSpecificStudent(req.params.id)
    resp.send(JSON.stringify(ans))
});

app.post('/estudiantes', (req, resp) => {
    resp.send('This function is not working yet, sorry')
});

app.put('/estudiantes/:id', (req, resp) => {
    resp.send(`This function is not working yet, sorry: ${req.params.id}`)
});

app.delete('/estudiantes/:id', (req, resp) => {
    let ans = st.deleteStudent(req.params.id)
    resp.send(JSON.stringify(ans))
});


app.listen(3000, () => {
    console.log("Rest API running on port 3000, By Hugo!")
}); 
