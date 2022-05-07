//requires
const express = require('express');
const path = require('path');

//inicializando express
const app = express();

//app.listen para el puerto 3030
app.listen(3030, ()=>console.log("Server Running"));

//rutas de la página
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./views/index.html")));
app.get("/babbage", (req, res) => res.sendFile(path.join(__dirname, "./views/babbage.html")));
app.get("/berners-lee", (req, res) => res.sendFile(path.join(__dirname, "./views/berners-lee.html")));
app.get("/clarke", (req, res) => res.sendFile(path.join(__dirname, "./views/clarke.html")));
app.get("/hamilton", (req, res) => res.sendFile(path.join(__dirname, "./views/hamilton.html")));
app.get("/hopper", (req, res) => res.sendFile(path.join(__dirname, "./views/hopper.html")));
app.get("/lovelace", (req, res) => res.sendFile(path.join(__dirname, "./views/lovelace.html")));
app.get("/turing", (req, res) => res.sendFile(path.join(__dirname, "./views/turing.html")));
app.get("/steven-universe", (req, res)=> res.sendFile(path.join(__dirname,"./views/steven-universe.html")));

//ruta de los archivos estáticos
app.use(express.static('./public'));