// @flow
import type { $Request, $Response} from 'express';




const hbs = require("hbs");
const express = require("express");
const app = express();
app.set("view engine", "hbs");
console.log( __dirname + "/views");
app.set("views", __dirname + "/views");

// $FlowFixMe
const http = require("http").Server(app);
const io = require('socket.io')(http);

io.on("connection", () => {
    console.log("new user connected");
});

app.get('/', (req: $Request, res: $Response) => {
    res.render("index");
});

http.listen(8300, () => {
    console.log("Server running on 8300");
});