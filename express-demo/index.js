const express = require('express');
const app = express();

const flavors = [
    { id: 1, flavor: "chocolate"},
    { id: 2, flavor: "rokcy road"},
    { id: 3, flavor: "lapok"},
    { id: 4, flavor: "kahoy"},
    { id: 5, flavor: "pucha fenk"},
];


app.get('/',(req, res) => {
    res.send("I love integrative bleh programming");
});

app.get('/api/get/flavors', (req, res) => {
    res.send(flavors);
});

app.get('/api/get/:id', (req, res) => {
    const flavor = flavors.find(c=> c.id === 
        parseInt(req.params.id));
        if(!flavor) res.status(404).send('The flavor with the given ID is not found');
        res.send(flavor);
});

app.get('/api/post/flavor/:year/:month', (req, res) => {
    res.send(req.params);
}) ;


 ///////////////////ACTVITY///////////////////////////////

const employees = [
    { emid: 1, employee: "Raul Gibson"},
    { emid: 2, employee: "Gavyn Terrell"},
    { emid: 3, employee: "Dayana Gonzales"},
    { emid: 4, employee: "Donald Cameron"},
    { emid: 5, employee: "Theodore House"},
    { emid: 6, employee: "Brenton Shea"},
    { emid: 7, employee: "Kaeden Pace"},
    { emid: 8, employee: "Elyse Lynch"},
    { emid: 9, employee: "Ingrid Brooks"},
    { emid: 10, employee: "Tamia Ware"},
];

app.get('/api/employee/:emid', (req, res) => {
    const employee = employees.find(c=> c.emid === 
        parseInt(req.params.emid));
        if(!employee) res.status(404).send('The employee with the given ID is not found');
        res.send(employee);
});

const users = [
    { uid: 1, user: "Raul Gibson", gender: "male", email: "gibson@gmail.com"},
    { uid: 2, user: "Gavyn Terrell", gender: "male", email: "terrell@gmail.com"},
    { uid: 3, user: "Dayana Gonzales", gender: "female", email: "gonzales@gmail.com"},
    { uid: 4, user: "Donald Cameron", gender: "male", email: "cameron@gmail.com"},
    { uid: 5, user: "Theodore House", gender: "male", email: "house@gmail.com"},
];

app.get('/api/users', (req, res) => {
    res.send(users);
});

const students = [
    { sid: 1, student: "Raul Gibson", age:"19", gender: "male", department: "BSIT"},
    { sid: 2, student: "Gavyn Terrell", age:"21", gender: "male", department: "BSCE" },
    { sid: 3, student: "Dayana Gonzales", age:"20", gender: "female", department: "BSIT"},
    { sid: 4, student: "Donald Cameron" , age:"19", gender: "male", department: "BSCE"},
    { sid: 5, student: "Theodore House" , age:"19", gender: "male", department: "BSIT"},
    { sid: 6, student: "Brenton Shea" , age:"22", gender: "male", department: "BSTCM"},
    { sid: 7, student: "Kaeden Pace" , age:"56", gender: "male", department: "BSIT"},
    { sid: 8, student: "Elyse Lynch" , age:"34", gender: "female", department: "BSTCM"},
    { sid: 9, student: "Ingrid Brooks" , age:"76", gender: "male", department: "BSTCM"},
    { sid: 10, student: "Tamia Ware" , age:"19", gender: "female", department: "BSIT"},
];

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('/api/students/:sid', (req, res) => {
    const student = students.find(c=> c.sid === 
        parseInt(req.params.sid));
        if(!student) res.status(404).send('The student with the given ID is not found');
        res.send(student);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening to post ${port}`));