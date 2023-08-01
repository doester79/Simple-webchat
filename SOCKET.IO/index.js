const express = require("express");
const http = require ("http");
const socketIO = require("socket.io");

const app = express()
const server = http.createServer(app)
const io = socketIO(server);

app.get('/', (req, res) =>{
    res.send("Hello World!")
});

io.onconnection('connection' , (socket) => {
    console.log("new User connected");
});