//jshint esversion:6

const express = require('express');

const app = express();

app.get('/', function (request, response) {
   response.send('<h1>Hello World</h1>')
})

app.get('/about', function (request, response) {
    response.send('<p>My name is Ially Fabiane da Silva, 28 years old, and i live in Brazil.</p>')
})

app.get('/contact', function (request, response) {
    response.send('<p>You can contact me on this address: ially@mail.com.</p>')
})

app.get('/hobbies', function (request, response) {
    response.send('<h3>My hobbies</h3><ul><li>Coffee</li><li>Code</li><li>Workout</li><li>Make up</li><li>Skin Care</li><li>Learn</li></ul>')
})

app.listen(3000, function () {
    console.log("Server started on port 3000")
});