'use strict'
var express = require('express')
var bodyParser = ('body-parser')
var app = express()
app.listen(7070, function () {
    console.log('hola mundo')
});
//Middleware que parsea bodies por los distintos metodos (POST, PUT), false
app.use(bodyParser).urleencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api', function (req, res) {
    //response
    res.status(200).send({
        arreglo: [{ objeto_1: 1, objeto_2: 2 }, { objeto_1: 2, objeto_1: 2, objeto_2: 3 }],
        ejemplo: "este es de respuesta " + parametro1 + operando
    })
})

app.listen(7070, function () {
    console.log('este es un ejemplo de una api')
});

